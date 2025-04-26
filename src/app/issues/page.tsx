import { Table } from "@radix-ui/themes";
import prisma from "../lib/prisma";
import IssueAction from "./IssueAction";
import IssueTableBody from "./IssueTableBody";
import IssueTableHeader from "./IssueTableHeader";
import { Status } from "@prisma/client";
import { z } from "zod";
// 尝试根据项目结构调整导入路径，可能需要检查文件是否存在于指定目录
import Pagination from "../components/Pagination";
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
    page?: string;
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
  const where = status === "ALL" ? undefined : { status }; // 如果 status 为 ALL，则不使用 wher
  const issueCount = await prisma.issue.count({ where });
  var page = parseInt(params.page || "1");
  if (page < 1 || page > Math.ceil(issueCount / 10)) {
    page = 1;
  }
  const pageSize = 10;
  const issues = await prisma.issue.findMany({
    where,
    orderBy: orderByStatus
      ? { [orderByStatus as string]: orderDirection }
      : undefined,
    skip: (page - 1) * pageSize,
    take: pageSize,
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
      <div className="ml-4 mt-4 flex justify-end">
        <Pagination
          currentPage={page}
          itemCount={issueCount}
          pageSize={pageSize}
        ></Pagination>
      </div>
    </div>
  );
};

export default IssuesPage;
