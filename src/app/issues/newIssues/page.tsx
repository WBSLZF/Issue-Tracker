"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { createIssueSchema } from "@/app/validationIssueSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const newIssues = async () => {
  type IssueForm = z.infer<typeof createIssueSchema>;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueForm>({ resolver: zodResolver(createIssueSchema) });
  const route = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setisSubmitting(true);
      await axios.post("/api/issues", data);
      route.push("/issues");
    } catch (error) {
      setError("An unexpected error occured");
    }
  });
  return (
    <div className="max-w-lg p-5">
      {error && (
        <Callout.Root color="red" className="mb-1">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className="space-y-2" onSubmit={onSubmit}>
        <TextField.Root
          placeholder="Input the title…"
          {...register("title")}
        ></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Input the Description…" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          Submit New Issues{isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default newIssues;
