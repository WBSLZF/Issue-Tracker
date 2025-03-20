import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loadingIssueDetail = () => {
  return (
    <Box className="max-w-lg">
      <Skeleton />
      <Flex className="items-center gap-x-4">
        <Skeleton containerClassName="w-10" />
        <Skeleton containerClassName="w-20" />
      </Flex>
      <Card className="max-w-xl prose mt-2">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default loadingIssueDetail;
