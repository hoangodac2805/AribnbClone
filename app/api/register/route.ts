import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, password } = body;

  const hashPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashPassword
    },
  });

  return NextResponse.json(user);
}
