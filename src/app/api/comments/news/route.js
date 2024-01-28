import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    let { searchParams } = new URL(req.url);
    let postId = parseInt(searchParams.get("postId"));

    const result = await prisma.comments.findMany({
      where: { postId: postId },
      include: {
        users: { select: { firstName: true } },
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}
