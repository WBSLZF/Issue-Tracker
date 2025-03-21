import { Issue } from "@prisma/client";
import { Table } from "@radix-ui/themes";
import IssueStatusBadge from "../components/IssueStatusBadge";
import Link from "../components/Link";

const IssueTableBody = ({ issues }: { issues: Issue[] }) => {
  return issues.map((issue) => (
    <Table.Row key={issue.id}>
      <Table.ColumnHeaderCell>
        <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
        <div className="block md:hidden">{issue.status}</div>
      </Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className="hidden md:table-cell">
        <IssueStatusBadge status={issue.status}></IssueStatusBadge>
      </Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className="hidden md:table-cell">
        {issue.createdAt.toDateString()}
      </Table.ColumnHeaderCell>
    </Table.Row>
  ));
};

export default IssueTableBody;
