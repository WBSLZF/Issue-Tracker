import { NextResponse } from "next/server";
import { validateIssueSchema } from "@/app/validationIssueSchema";
import prisma from "@/app/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json();
  const validataResult = validateIssueSchema.safeParse(body);
  if (!validataResult.success) {
    return NextResponse.json(
      { error: validataResult.error.format() },
      { status: 400 }
    );
  }
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue) {
    return NextResponse.json("Issue not Found", { status: 404 });
  }
  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      title: validataResult.data.title,
      description: validataResult.data.description,
    },
  });
  return NextResponse.json(updatedIssue, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) {
    return NextResponse.json("Issue not found", { status: 404 });
  }

  await prisma.issue.delete({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({});
}
