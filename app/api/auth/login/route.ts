import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import bcrypt from 'bcrypt';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'super-secret-key-for-dev-only');

export async function POST(request: NextRequest) {
  try {
    const { email, password, requestedRole } = await request.json();

    // In a real app, query Prisma here.
    // We are hardcoding mock users for scaffolding.
    const mockUsers = [
      { id: '1', email: 'student@campus.edu', password: 'password', role: 'STUDENT', firstName: 'Jane', lastName: 'Doe' },
      { id: '2', email: 'teacher@campus.edu', password: 'password', role: 'TEACHER', firstName: 'John', lastName: 'Smith' },
      { id: '3', email: 'admin@campus.edu', password: 'password', role: 'ADMIN', firstName: 'System', lastName: 'Admin' }
    ];

    const user = mockUsers.find(u => u.email === email);
    
    if (!user || user.password !== password) { // In prod, use bcrypt.compare
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    
    if (requestedRole && user.role !== requestedRole) {
      return NextResponse.json({ error: 'Account does not have access to this portal' }, { status: 403 });
    }

    const token = await new SignJWT({ 
      id: user.id, 
      role: user.role, 
      email: user.email 
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(JWT_SECRET);

    const response = NextResponse.json({ 
      user: { id: user.id, role: user.role, firstName: user.firstName, lastName: user.lastName }, 
      token 
    });

    // Set HTTP-only cookie for middleware
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
