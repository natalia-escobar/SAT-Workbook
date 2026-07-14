export default function HowThisWorks() {
  const steps = [
    {
      title: "Open Desmos in another tab",
      body: (
        <>
          Go to{" "}
          <a href="https://www.desmos.com/calculator" target="_blank" rel="noreferrer" style={{ color: "#534AB7", textDecoration: "none" }}>
            desmos.com/calculator
          </a>{" "}
          and keep it open side by side with this page.
        </>
      ),
    },
    {
      title: "Watch the worked example",
      body: "Each topic starts with a real SAT problem. Click through the steps on the right to see exactly what to type into Desmos.",
    },
    {
      title: "Try it yourself",
      body: "After watching, you'll get a similar problem to solve on your own. Check off each step as you go, then reveal the answer to confirm.",
    },
    {
      title: "Practice on your own",
      body: "Each worked example comes with practice problems. Try them independently, then reveal the Desmos setup to check your work.",
    },
  ];

  return (
    <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #e0e0de", padding: "1.25rem", marginBottom: "1.5rem" }}>
      <p style={{ fontSize: "15px", fontWeight: 500, color: "#1a1a1a", marginBottom: "16px" }}>How this works</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <div style={{ minWidth: "24px", height: "24px", borderRadius: "50%", background: "#EEEDFE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 500, color: "#534AB7", marginTop: "1px" }}>
              {i + 1}
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#1a1a1a", marginBottom: "2px" }}>{step.title}</p>
              <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.5 }}>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}