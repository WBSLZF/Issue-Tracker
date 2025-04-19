import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(req: Request) {
  const users = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return NextResponse.json(users);
}
