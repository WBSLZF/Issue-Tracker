import prisma from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import IssueForm from "../../_components/IssueForm";
interface props {
  params: Promise<{ id: string }>;
}
const EditPage = async ({ params }: props) => {
  const { id } = await params;
  if (!id || isNaN(parseInt(id))) {
    notFound();
  }
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue) notFound();
  return <IssueForm issue={issue} />;
};

export default EditPage;
