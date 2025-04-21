import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { validateIssueSchema } from "../../validationIssueSchema";
export async function POST(request: Request) {
  const body = await request.json();
  const validataResult = validateIssueSchema.safeParse(body);
  if (!validataResult.success) {
    return NextResponse.json(
      { error: validataResult.error.errors },
      { status: 400 }
    );
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: validataResult.data.title,
      description: validataResult.data.description,
    },
  });

  return NextResponse.json(newIssue, { status: 200 });
}
