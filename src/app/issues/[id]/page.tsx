import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/app/lib/prisma";
import { Card, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
interface props {
  params: { id: string };
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
    <div className="grid gap-y-2">
      <Heading>{issueDetail.title}</Heading>
      <div className="flex items-center gap-x-4">
        <IssueStatusBadge status={issueDetail.status}></IssueStatusBadge>
        <Text>{issueDetail.createdAt.toDateString()}</Text>
      </div>
      <Card className="max-w-xl prose mt-2">
        <Markdown>{issueDetail.description}</Markdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
