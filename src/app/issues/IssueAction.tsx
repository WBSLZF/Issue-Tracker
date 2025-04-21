import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueFilter from "./IssueFilter";
const IssueAction = () => {
  return (
    <Flex pt="5" justify="between" mb="5">
      <IssueFilter />
      <Button>
        <Link href="./issues/newIssues">New Issues</Link>
      </Button>
    </Flex>
  );
};

export default IssueAction;
