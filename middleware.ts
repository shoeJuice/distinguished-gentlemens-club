import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export default function assignCookie(req: NextRequest, res: NextResponse) {
  if (!req.cookies.get("Authentication")) {
    let clientID = uuidv4();
    const response = NextResponse.next();
    response.cookies.set("Authentication", `bearer ${clientID}`, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  }
}

export const config = {
  matcher: ["/((?!api|static|images|favicon.ico).*)"],
};
