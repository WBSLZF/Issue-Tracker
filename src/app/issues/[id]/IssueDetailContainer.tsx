import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Card, Heading, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";

const IssueDetailContainer = ({ issueDetail }: { issueDetail: Issue }) => {
  return (
    <div>
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

export default IssueDetailContainer;
