"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "ALL" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];
const IssueFilter = () => {
  const router = useRouter();
  const currentParams = useSearchParams();
  return (
    <Select.Root
      defaultValue={currentParams.get("status") || "ALL"}
      onValueChange={(value) => {
        const params = new URLSearchParams();
        params.append("status", value);
        if (currentParams.get("orderByStatus")) {
          params.append(
            "orderByStatus",
            currentParams.get("orderByStatus") as string
          );
        }
        if (currentParams.get("orderDirection")) {
          params.append(
            "orderDirection",
            currentParams.get("orderDirection") as string
          );
        }
        console.log("params", params.toString());
        const query = "/issues?" + (params ? params.toString() : "");
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
