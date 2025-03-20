import { Box, Button } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const loadingNewIssue = () => {
  return (
    <Box className="max-w-lg">
      <Skeleton />
      <Skeleton height="20rem" />
      <Button className="mt-4">Submit New Issues</Button>
    </Box>
  );
};

export default loadingNewIssue;
