"use client";
import { Select } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { User } from "@prisma/client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
const AsignSelectIssueButton = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, // 数据1分钟更新一次
    retry: 3,
  });
  if (isLoading) return <Skeleton className="h-8" />;
  if (error) return null;
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign to" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions...</Select.Label>
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
  );
};

export default AsignSelectIssueButton;
