"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const IssueDeleteButton = ({ id }: { id: number }) => {
  const route = useRouter();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete Issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this item? You can't undo this action.
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <Button
            variant="solid"
            color="red"
            onClick={async () => {
              await axios.delete(`/api/issues/${id}`);
              route.push("/issues");
              route.refresh();
            }}
          >
            Delete Issue
          </Button>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default IssueDeleteButton;
