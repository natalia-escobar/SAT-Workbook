import Link from "next/link";
import topics from "@/data/topics";

export default function Home() {
  return (
    <main className="page">
      <h1 style={{ fontSize: "1.6rem", fontWeight: 600, marginBottom: "20px" }}>
        Practice Workbooks
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {Object.entries(topics).map(([slug, topic]) => (
          <Link
            key={slug}
            href={`/workbook/${slug}`}
            style={{
              display: "block",
              padding: "16px 20px",
              border: "0.5px solid #e0e0de",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#1a1a1a",
            }}
          >
            <div style={{ fontSize: "16px", fontWeight: 600 }}>{topic.name}</div>
            <div style={{ fontSize: "13px", color: "#888", marginTop: "4px" }}>
              {topic.workedProblems.length} problems
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}