import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import prisma from "./lib/prisma";
import LatestIssue from "./LatestIssue";
export default async function Page({}: {}) {
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
  return (
    <Grid
      columns={{ initial: "1", md: "2" }}
      gap="5"
      align="start"
      justify="between"
      style={{ height: "100vh", padding: "2rem" }}
    >
      <Flex direction={"column"} gap="5" className="w-full">
        <IssueSummary
          closed_count={closed_count}
          in_progress_count={in_progress_count}
          open_count={open_count}
        />
        <IssueChart
          closed={closed_count}
          open={open_count}
          in_progress={in_progress_count}
        />
      </Flex>
      <LatestIssue />
    </Grid>
  );
}
