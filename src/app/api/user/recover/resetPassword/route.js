import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function POST(req, res) {
  try {
    let reqbody = await req.json();

    const prisma = new PrismaClient();

    const count = await prisma.users.count({
      where: { email: reqbody["email"], otp: reqbody["otp"] },
    });
    if (count === 1) {
      await prisma.users.update({
        where: { email: reqbody["email"] },
        data: { otp: "0", password: reqbody["password"] },
      });
      return NextResponse.json({
        status: "success",
        data: "password reset success",
      });
    } else {
      return NextResponse.json({ status: "fail", data: "password reset fail" });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}
