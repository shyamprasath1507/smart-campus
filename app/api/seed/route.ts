import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

export async function GET() {
  const prisma = new PrismaClient();
  try {
    // 1. Clear existing data
    await prisma.walletTransaction.deleteMany();
    await prisma.bookReservation.deleteMany();
    await prisma.libraryBook.deleteMany();
    await prisma.enrollment.deleteMany();
    await prisma.course.deleteMany();
    await prisma.teacherProfile.deleteMany();
    await prisma.studentProfile.deleteMany();
    await prisma.user.deleteMany();
    await prisma.cafeteriaOrder.deleteMany();
    await prisma.cafeteriaItem.deleteMany();
    await prisma.clubMembership.deleteMany();
    await prisma.club.deleteMany();

    // 2. Create Users
    const studentUser = await prisma.user.create({
      data: {
        email: 'student@campus.edu',
        passwordHash: 'password', // mock
        role: 'STUDENT',
        firstName: 'Jane',
        lastName: 'Doe',
        studentProfile: {
          create: { walletBalance: 124.50, cgpa: 3.8 }
        }
      },
      include: { studentProfile: true }
    });

    const teacherUser = await prisma.user.create({
      data: {
        email: 'teacher@campus.edu',
        passwordHash: 'password',
        role: 'TEACHER',
        firstName: 'John',
        lastName: 'Smith',
        teacherProfile: {
          create: { department: 'Computer Science' }
        }
      },
      include: { teacherProfile: true }
    });

    const adminUser = await prisma.user.create({
      data: {
        email: 'admin@campus.edu',
        passwordHash: 'password',
        role: 'ADMIN',
        firstName: 'System',
        lastName: 'Admin'
      }
    });

    // 3. Create Courses
    if (teacherUser.teacherProfile) {
      await prisma.course.create({
        data: {
          title: 'Introduction to Computer Science',
          code: 'CS101',
          teacherId: teacherUser.teacherProfile.id,
          enrollments: {
            create: { studentId: studentUser.studentProfile!.id, currentGrade: 92.5 }
          }
        }
      });
      await prisma.course.create({
        data: {
          title: 'Advanced Data Structures',
          code: 'CS201',
          teacherId: teacherUser.teacherProfile.id,
          enrollments: {
            create: { studentId: studentUser.studentProfile!.id, currentGrade: 88.0 }
          }
        }
      });
    }

    // 4. Create Library Books
    await prisma.libraryBook.create({
      data: { title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0132350884', status: 'AVAILABLE' }
    });
    const book = await prisma.libraryBook.create({
      data: { title: 'Design Patterns', author: 'Gang of Four', isbn: '978-0201633610', status: 'RESERVED' }
    });
    
    await prisma.bookReservation.create({
      data: { bookId: book.id, userId: studentUser.id, status: 'PENDING' }
    });

    // 5. Create Cafeteria Items
    await prisma.cafeteriaItem.create({ data: { name: 'Campus Burger', price: 5.50, category: 'LUNCH' } });
    await prisma.cafeteriaItem.create({ data: { name: 'Iced Coffee', price: 3.00, category: 'BEVERAGE' } });

    // 6. Create Clubs
    await prisma.club.create({
      data: { name: 'Robotics Society', description: 'Build robots!' }
    });

    return NextResponse.json({ message: 'Database Seeded Successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Seeding failed' }, { status: 500 });
  }
}
