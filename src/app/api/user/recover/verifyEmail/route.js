import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SendEmail } from "@/utility/EmailUtility";
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let email = searchParams.get("email");
    //let id = searchParams.get("id");
    console.log(email);
    // User Count
    const count = await prisma.users.count({ where: { email: email } });
    console.log("your count");
    if (count === 1) {
      let code = Math.floor(100000 + Math.random() * 900000);
      let EmailText = `Your OTP Code is=${code}`;
      let EmailSubject = "Next News Verification Code";
      await SendEmail(email, EmailText, EmailSubject);
      //await SendEmail(id, EmailText, EmailSubject);

      let result = await prisma.users.update({
        //where: { email: email },
        where: { email: email },
        data: { otp: code.toString() },
      });
      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({
        status: "bfail",
        data: count,
      });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}
