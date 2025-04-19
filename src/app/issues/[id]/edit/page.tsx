// Server Component
import prisma from "@/app/lib/prisma";
import { notFound, redirect } from "next/navigation";
import EditIssueClient from "./EditIssueClient";
import { auth } from "auth";

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const { id } = await params;
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  if (!id || isNaN(parseInt(id))) {
    notFound();
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return <EditIssueClient issue={issue} />;
};

export default EditIssuePage;
