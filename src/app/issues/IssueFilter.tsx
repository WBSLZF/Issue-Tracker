"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "ALL" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];
const IssueFilter = () => {
  const router = useRouter();
  return (
    <Select.Root
      onValueChange={(value) => {
        const query = "/issues?" + (value == "ALL" ? "" : "status=" + value);
        router.push(query);
      }}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => {
          return (
            <Select.Item
              key={status.label}
              value={status.value ? status.value : "ALL"}
            >
              {status.label}
            </Select.Item>
          );
        })}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueFilter;
