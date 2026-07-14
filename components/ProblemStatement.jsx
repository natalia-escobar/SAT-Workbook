import MathContent from "./MathContent";

export default function ProblemStatement({ problem }) {
  return <MathContent html={problem} className="problem-statement" />;
}