"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const IssueDeleteButton = ({ id }: { id: number }) => {
  const route = useRouter();
  const [error, setError] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteIssue = async () => {
    try {
      await axios.delete(`/api/issues/${id}`);
      route.push("/issues");
      route.refresh();
    } catch (error) {
      setError(true);
      setShowConfirm(false);
    }
  };

  return (
    <>
      <AlertDialog.Root open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialog.Trigger>
          <Button color="red">Delete Issue</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue? You can't undo this
            action.
          </AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <Button variant="solid" color="red" onClick={deleteIssue}>
              Delete Issue
            </Button>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            oops! You can't delete this issue.
          </AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button
                variant="soft"
                color="gray"
                onClick={() => setError(false)}
              >
                Close
              </Button>
            </AlertDialog.Cancel>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default IssueDeleteButton;
