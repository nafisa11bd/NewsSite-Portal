import { NextResponse } from "next/server";
import { VerifyToken } from "./utility/JWTTokenHelper";
import { headers } from "../next.config";
export async function middleware(req, res) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const requestHeader = new Headers(req.headers);
    requestHeader.set("id", payload["id"]);
    requestHeader.set("email", payload["email"]);
    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (e) {
    const requestHeader = new Headers(req.headers);
    requestHeader.set("id", "0");
    requestHeader.set("email", "0");
    return NextResponse.next({ request: { headers: requestHeader } });
  }
}
