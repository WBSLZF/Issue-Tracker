import { Table } from "@radix-ui/themes";
import prisma from "../lib/prisma";
import IssueAction from "./IssueAction";
import IssueTableBody from "./IssueTableBody";
import IssueTableHeader from "./IssueTableHeader";
import { Status } from "@prisma/client";

interface Props {
  searchParams: Promise<{ status: Status }>;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const { status } = await searchParams;
  const issues = await prisma.issue.findMany({
    where: { status },
  });

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

export default IssuesPage;
