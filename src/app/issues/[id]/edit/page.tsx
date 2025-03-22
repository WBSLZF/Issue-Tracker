// Server Component
import prisma from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import EditIssueClient from "./EditIssueClient";

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const { id } = params;

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
