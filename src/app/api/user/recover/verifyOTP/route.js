import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    let reqbody = await req.json();

    const prisma = new PrismaClient();

    const count = await prisma.users.count({ where: reqbody });
    if (count === 1) {
      return NextResponse.json({ status: "success", data: "valid OTP code" });
    } else {
      return NextResponse.json({ status: "fail", data: "invalid OTP code" });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}
