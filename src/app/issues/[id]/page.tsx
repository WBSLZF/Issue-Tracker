import prisma from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import IssueDetailContainer from "./IssueDetailContainer";
import IssueEdittingButton from "./IssueSubmittingButton";
interface props {
  params: Promise<{ id: string }>;
}
const IssueDetailPage = async ({ params }: props) => {
  const { id } = await params;
  // 验证id是否为有效数字
  if (!id || isNaN(parseInt(id))) {
    notFound();
  }

  const issueDetail = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issueDetail) notFound();
  return (
    <div className="grid sm:grid-cols-2 gap-y-2">
      <IssueDetailContainer issueDetail={issueDetail} />
      <div className="mt-2">
        <IssueEdittingButton id={parseInt(id)} />
      </div>
    </div>
  );
};

export default IssueDetailPage;
