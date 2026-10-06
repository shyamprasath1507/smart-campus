import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'super-secret-key-for-dev-only');

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  const path = request.nextUrl.pathname;

  // Protect dashboard routes
  if (path.startsWith('/student') || path.startsWith('/teacher') || path.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      
      // Basic Role-Based Routing validation
      if (path.startsWith('/student') && payload.role !== 'STUDENT') return NextResponse.redirect(new URL('/', request.url));
      if (path.startsWith('/teacher') && payload.role !== 'TEACHER') return NextResponse.redirect(new URL('/', request.url));
      if (path.startsWith('/admin') && payload.role !== 'ADMIN') return NextResponse.redirect(new URL('/', request.url));
      
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Redirect authenticated users away from auth portals
  if (path.startsWith('/login') && token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      if (payload.role === 'STUDENT') return NextResponse.redirect(new URL('/student', request.url));
      if (payload.role === 'TEACHER') return NextResponse.redirect(new URL('/teacher', request.url));
      if (payload.role === 'ADMIN') return NextResponse.redirect(new URL('/admin', request.url));
    } catch (err) {
      // Invalid token, allow access to login
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/student/:path*', '/teacher/:path*', '/admin/:path*', '/login/:path*'],
};
