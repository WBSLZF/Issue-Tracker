import React from "react";
import { Table, Card, Text, Flex, Avatar, Heading } from "@radix-ui/themes";
import prisma from "./lib/prisma";
import Link from "./components/Link";
import IssueStatusBadge from "./components/IssueStatusBadge";
const LatestIssue = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 9,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card>
      <Heading mb="2">Latest Issues</Heading>

      <Table.Root variant="surface">
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex direction="column" gap="1" align={"start"}>
                  <Link href={"/issues/" + issue.id}>{issue.title}</Link>
                  <IssueStatusBadge status={issue.status}></IssueStatusBadge>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Text color="violet">
                  {issue.createdAt.toLocaleDateString()}
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Avatar src={issue.assignedToUser?.image!} fallback="?" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssue;
