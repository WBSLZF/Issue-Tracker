import { Table } from "@radix-ui/themes";
import prisma from "../lib/prisma";
import IssueAction from "./IssueAction";
import IssueTableBody from "./IssueTableBody";
import IssueTableHeader from "./IssueTableHeader";
import { Status } from "@prisma/client";
import { z } from "zod";

const searchParamsSchema = z.object({
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED", "ALL"]),
  orderByStatus: z.enum(["title", "status", "createdAt"]).optional(),
  orderDirection: z.enum(["asc", "desc"]).optional(),
});

interface Props {
  searchParams: Promise<{
    status: Status;
    orderByStatus?: string;
    orderDirection?: "asc" | "desc";
  }>;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const validatedParams = searchParamsSchema.safeParse(params); // 如果验证失败，使用默认值
  const { status, orderByStatus, orderDirection } = validatedParams.success
    ? validatedParams.data
    : {
        status: undefined,
        orderByStatus: undefined,
        orderDirection: undefined,
      };

  const issues = await prisma.issue.findMany({
    where: { status: status === "ALL" ? undefined : status },
    orderBy: orderByStatus
      ? { [orderByStatus as string]: orderDirection }
      : undefined,
  });

  return (
    <div>
      <IssueAction />
      <Table.Root variant="surface">
        <Table.Header>
          <IssueTableHeader searchParams={searchParams} />
        </Table.Header>
        <Table.Body>
          <IssueTableBody issues={issues} />
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
