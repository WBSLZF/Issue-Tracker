"use client";
import { Select } from "@radix-ui/themes";
import React from "react";
import { Issue, User } from "@prisma/client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import toast, { Toaster } from "react-hot-toast";
const AsignSelectIssueButton = ({ issue }: { issue: Issue }) => {
  const handleValueChange = (userId: string) => {
    axios
      .patch(`/api/issues/${issue.id}`, {
        assignedToUserId: userId === "unassigned" ? null : userId,
      })
      .catch(() => {
        toast.error("Failed to assign the issue");
      });
  };
  const usersQuery = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, // 数据1分钟更新一次
    retry: 3,
  });
  const { data: users, error, isLoading } = usersQuery;
  if (isLoading) return <Skeleton className="h-8" />;
  if (error) return null;
  return (
    <>
      <Select.Root
        defaultValue={
          issue.assignedToUserId ? issue.assignedToUserId : "unassigned"
        }
        onValueChange={handleValueChange}
      >
        <Select.Trigger placeholder="Assign to" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions...</Select.Label>
            <Select.Item value="unassigned">Unassigned</Select.Item>
            {users?.map((user) => {
              return (
                <Select.Item key={user.id} value={user.id}>
                  {user.name}
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default AsignSelectIssueButton;
