import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Card, Heading, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";

const IssueDetailContainer = ({ issueDetail }: { issueDetail: Issue }) => {
  return (
    <div className="max-w-full mr-4">
      <Heading>{issueDetail.title}</Heading>
      <div className="flex items-center gap-x-4">
        <IssueStatusBadge status={issueDetail.status}></IssueStatusBadge>
        <Text>{issueDetail.createdAt.toDateString()}</Text>
      </div>
      <Card className="prose mt-4 py-3 max-w-full">
        <Markdown>{issueDetail.description}</Markdown>
      </Card>
    </div>
  );
};

export default IssueDetailContainer;
