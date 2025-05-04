import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, nickname, password } = body;

    if (!email || !name || !nickname || !password) {
      return new NextResponse('이메일, 이름, 닉네임, 비밀번호는 필수 항목입니다.', { status: 400 });
    }

    // 이메일 중복 확인
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new NextResponse('이미 등록된 이메일입니다.', { status: 400 });
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 12);

    // 사용자 생성
    const user = await prisma.user.create({
      data: {
        email,
        name,
        nickname,
        hashedPassword,
      },
    });

    return NextResponse.json({
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
    });
  } catch (error) {
    console.error('REGISTRATION_ERROR', error);
    return new NextResponse('내부 서버 오류', { status: 500 });
  }
} 