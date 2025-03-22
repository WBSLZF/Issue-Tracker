"use client";

import { Issue } from "@prisma/client";
import dynamic from "next/dynamic";
import LoadingIssueForm from "../../_components/LoadingIssueForm";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <LoadingIssueForm />,
});

interface Props {
  issue: Issue;
}

const EditIssueClient = ({ issue }: Props) => {
  return <IssueForm issue={issue} />;
};

export default EditIssueClient;
