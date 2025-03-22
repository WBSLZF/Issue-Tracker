import { Table } from "@radix-ui/themes";
import prisma from "../lib/prisma";
import IssueAction from "./IssueAction";
import IssueTableBody from "./IssueTableBody";
import IssueTableHeader from "./IssueTableHeader";
const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <IssueAction />
      <Table.Root variant="surface">
        <Table.Header>
          <IssueTableHeader />
        </Table.Header>
        <Table.Body>
          <IssueTableBody issues={issues} />
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export const dynamic = "force-dynamic";
export default IssuesPage;
