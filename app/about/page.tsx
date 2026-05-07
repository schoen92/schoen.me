import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Social Listen In",
};

export default function AboutPage() {
  return (
    <article className="prose prose-slate max-w-3xl">
      <h1>About Social Listen In</h1>
      <p>
        Social Listen In is a public blog for builders, researchers, and operators who want clearer signals from noisy markets.
      </p>
      <p>
        We publish practical guidance on social listening, customer research, AI coding workflows, and data quality systems that improve decision-making.
      </p>
      <p>
        The goal is simple: help teams move faster with better evidence.
      </p>
    </article>
  );
}
