import prisma from "@/app/lib/prisma";
import { notFound } from "next/navigation";
interface props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: props) => {
  const id = params.id;

  // 验证id是否为有效数字
  if (!id || isNaN(parseInt(id))) {
    notFound();
  }

  const issueDetail = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issueDetail) notFound();

  return (
    <div>
      <p>{issueDetail.title}</p>
      <p>{issueDetail.description}</p>
      <p>{issueDetail.status}</p>
      <p>{issueDetail.createdAt.getDate()}</p>
    </div>
  );
};

export default IssueDetailPage;
