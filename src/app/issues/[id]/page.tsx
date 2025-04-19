import prisma from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import IssueDetailContainer from "./IssueDetailContainer";
import IssueEdittingButton from "./IssueSubmittingButton";
import DeleteIssueButton from "./IssueDeleteButton";
import { auth } from "auth";
import AsignSelectIssueButton from "./AsignSelectIssueButton";
interface props {
  params: Promise<{ id: string }>;
}
const IssueDetailPage = async ({ params }: props) => {
  const { id } = await params;
  const session = await auth();
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
      {session && (
        <div className="mt-8 flex flex-col gap-y-2 w-auto mr-8 ml-8">
          <AsignSelectIssueButton />
          <IssueEdittingButton id={parseInt(id)} />
          <DeleteIssueButton id={parseInt(id)}></DeleteIssueButton>
        </div>
      )}
    </div>
  );
};

export default IssueDetailPage;
