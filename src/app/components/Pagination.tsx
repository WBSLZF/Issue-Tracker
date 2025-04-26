"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
interface props {
  pageSize: number;
  itemCount: number;
  currentPage: number;
}
const Pagination = ({ pageSize, itemCount, currentPage }: props) => {
  const totalPageCount = Math.ceil(itemCount / pageSize);
  if (totalPageCount < 1) return null;
  const route = useRouter();
  const searchParams = useSearchParams();
  const changeValue = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    route.push("?" + params.toString());
  };
  return (
    <Flex gap="2" align={"center"}>
      <Text>
        {currentPage} of {totalPageCount}
      </Text>
      <Button
        variant="soft"
        color="gray"
        disabled={currentPage === 1}
        onClick={() => {
          changeValue(1);
        }}
      >
        <DoubleArrowLeftIcon></DoubleArrowLeftIcon>
      </Button>
      <Button
        variant="soft"
        color="gray"
        disabled={currentPage === 1}
        onClick={() => {
          changeValue(currentPage - 1);
        }}
      >
        <ChevronLeftIcon />
      </Button>

      <Button
        variant="soft"
        color="gray"
        disabled={currentPage === totalPageCount}
        onClick={() => {
          changeValue(currentPage + 1);
        }}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        variant="soft"
        color="gray"
        disabled={currentPage === totalPageCount}
        onClick={() => {
          changeValue(totalPageCount);
        }}
      >
        <DoubleArrowRightIcon></DoubleArrowRightIcon>
      </Button>
    </Flex>
  );
};

export default Pagination;
