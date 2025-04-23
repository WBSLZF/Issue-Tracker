import { Issue, Status } from "@prisma/client";
import { ChevronDownIcon, Table } from "@radix-ui/themes";
import Link from "next/link";

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  { label: "Title", value: "title" },
  { label: "Status", value: "status", className: "hidden md:table-cell" },
  { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
];

interface Props {
  searchParams: Promise<{
    status: Status;
    orderByStatus?: string;
    orderDirection?: "asc" | "desc";
  }>;
}

const IssueTableHeader = async ({ searchParams }: Props) => {
  const params = await searchParams;

  return (
    <Table.Row>
      {columns.map((column) => {
        const isCurrentSort = params.orderByStatus === column.value;
        const clickDesc = params.orderDirection === "desc";

        return (
          <Table.ColumnHeaderCell
            key={column.value}
            className={column.className}
          >
            <Link
              href={{
                query: {
                  ...params,
                  orderByStatus: column.value,
                  orderDirection: isCurrentSort && clickDesc ? "asc" : "desc", // 如果当前排序是当前列，并且点击的是降序，则改为升序，否则改为降序
                },
              }}
            >
              {column.label}
              {isCurrentSort && (
                <ChevronDownIcon
                  className={`ml-2 inline ${clickDesc ? "" : "rotate-180"}`}
                />
              )}
            </Link>
          </Table.ColumnHeaderCell>
        );
      })}
    </Table.Row>
  );
};

export default IssueTableHeader;
