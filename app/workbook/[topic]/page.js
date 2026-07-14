import topics from "@/data/topics";
import WorkbookView from "@/components/WorkbookView";
import { notFound } from "next/navigation";

export default async function TopicPage({ params }) {
  const { topic: slug } = await params;
  const topic = topics[slug];

  if (!topic) return notFound();

  return <WorkbookView topic={topic} />;
}