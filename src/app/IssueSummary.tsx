import React from "react";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { Status } from "@prisma/client";
// 假设 prisma 客户端文件实际路径为相对路径，这里尝试根据常见项目结构调整
import prisma from "./lib/prisma";
const IssueSummary = async () => {
  const open_count = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const closed_count = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  const in_progress_count = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  const issuesSummary: { label: string; value: Status; count: number }[] = [
    { label: "Open", value: "OPEN", count: open_count },
    { label: "Closed", value: "CLOSED", count: closed_count },
    { label: "In Progress", value: "IN_PROGRESS", count: in_progress_count },
  ];
  return (
    <Flex gap="2" mt="2">
      {issuesSummary.map((summary) => (
        <Card
          key={summary.value}
          className="hover:shadow-lg transition-shadow p-2 min-w-[150px]"
        >
          <Flex direction="column" gap="2" align="center">
            <Link
              href={`/issues?status=${summary.value}`}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
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
