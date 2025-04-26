import React from "react";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { Status } from "@prisma/client";
interface Props {
  open_count: number;
  closed_count: number;
  in_progress_count: number;
}
const IssueSummary = async ({
  open_count,
  closed_count,
  in_progress_count,
}: Props) => {
  const issuesSummary: { label: string; value: Status; count: number }[] = [
    { label: "Open", value: "OPEN", count: open_count },
    { label: "Closed", value: "CLOSED", count: closed_count },
    { label: "In Progress", value: "IN_PROGRESS", count: in_progress_count },
  ];
  return (
    <Flex gap="2" mt="2" width="100%">
      {issuesSummary.map((summary) => (
        <Card
          key={summary.value}
          className="hover:shadow-lg transition-shadow p-2 min-w-[250px]"
          size="4"
        >
          <Flex direction="column" gap="2" align="center">
            <Link
              href={`/issues?status=${summary.value}`}
              className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {summary.label}
            </Link>
            <Text size="6" className="font-bold text-gray-900">
              {summary.count}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
