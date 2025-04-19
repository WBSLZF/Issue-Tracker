"use client";
import dynamic from "next/dynamic";
import LoadingIssueForm from "../_components/LoadingIssueForm";

const IssueForm = dynamic(() => import("../_components/IssueForm"), {
  ssr: false,
  loading: () => <LoadingIssueForm />, // cause it rely on browser api
});

const NewIssuesPage = () => {
  return <IssueForm />;
};

export default NewIssuesPage;
