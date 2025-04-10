import prisma from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import IssueDetailContainer from "./IssueDetailContainer";
import IssueEdittingButton from "./IssueSubmittingButton";
import DeleteIssueButton from "./IssueDeleteButton";
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
    <div className="grid sm:grid-cols-5 gap-y-2">
      <div className="sm:col-span-4">
        <IssueDetailContainer issueDetail={issueDetail} />
      </div>
      <div className="mt-2 flex flex-col gap-y-2 w-auto mr-4">
        <IssueEdittingButton id={parseInt(id)} />
        <DeleteIssueButton id={parseInt(id)}></DeleteIssueButton>
      </div>
    </div>
  );
};

export default IssueDetailPage;
