// app/page.tsx
import fs from "fs";
import path from "path";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ExperienceClient from "./experience/ExperienceClient";

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

function parseExperienceMdx(raw: string): ExperienceItem[] {
  const rawEntries = raw
    .split(/\n---\n/)
    .map((entry) => entry.trim())
    .filter(Boolean);

  return rawEntries.map((entry, index) => {
    const titleMatch = entry.match(/^##\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : "Untitled Role";

    const metaMatch = entry.match(/\*\*(.+?)\*\*\s*\|\s*\*(.+?)\*/);
    const company = metaMatch ? metaMatch[1].trim() : "";
    const period = metaMatch ? metaMatch[2].trim() : "";

    const lines = entry.split("\n").map((l) => l.trim());
    const descLines = lines.filter(
      (line) =>
        line &&
        !line.startsWith("##") &&
        !/^\*\*.+\*\*\s*\|\s*\*.+\*$/.test(line)
    );
    const description = descLines.join(" ").trim();

    return {
      id: `${index}-${title}`,
      title,
      company,
      period,
      description,
    };
  });
}

export default async function Home() {
  const filePath = path.join(process.cwd(), "content", "experience.mdx");
  const raw = fs.readFileSync(filePath, "utf-8");
  const experiences = parseExperienceMdx(raw);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ExperienceClient experiences={experiences} />
      <Projects />
      <Footer />
    </>
  );
}
