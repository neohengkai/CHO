import { NextResponse } from "next/server";

import { checkValidRequest } from "./checker";

const dynamic = "force-dynamic";
interface CheckValidRequestResponse {
  valid: boolean;
}

export async function POST(
  request: Request
): Promise<NextResponse<CheckValidRequestResponse>> {
  const res = await request.json();
  const result: CheckValidRequestResponse = {
    valid: await checkValidRequest(res.email),
  };
  return NextResponse.json(result);
}
