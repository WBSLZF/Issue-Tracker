import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueEdittingButton = ({ id }: { id: number }) => {
  return (
    <Button asChild color="violet" className="w-full">
      <Link href={`/issues/${id}/edit`}>
        <Pencil2Icon />
        Edit Issue
      </Link>
    </Button>
  );
};

export default IssueEdittingButton;
