import { Box, Button } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingIssueForm = () => {
  return (
    <Box className="max-w-lg p-5">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
      <Button className="mt-4">Submit New Issues</Button>
    </Box>
  );
};

export default LoadingIssueForm;
