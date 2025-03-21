import { Table } from "@radix-ui/themes";

const IssueTableHeader = () => {
  return (
    <Table.Row>
      <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className="hidden md:table-cell">
        Status
      </Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className="hidden md:table-cell">
        Created
      </Table.ColumnHeaderCell>
    </Table.Row>
  );
};

export default IssueTableHeader;
