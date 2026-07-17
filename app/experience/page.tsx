// app/experience/page.tsx
import fs from "fs";
import path from "path";
import ExperienceClient from "./ExperienceClient";

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

function parseExperienceMdx(raw: string): ExperienceItem[] {
  // Split entries by the "---" divider
  const rawEntries = raw
    .split(/\n---\n/)
    .map((entry) => entry.trim())
    .filter(Boolean);

  return rawEntries.map((entry, index) => {
    // Extract H2 title: "## Senior UX/UI Designer"
    const titleMatch = entry.match(/^##\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : "Untitled Role";

    // Extract bold company + italic period on the same line:
    // "**SuperCo** | *2019 — Present*"
    const metaMatch = entry.match(/\*\*(.+?)\*\*\s*\|\s*\*(.+?)\*/);
    const company = metaMatch ? metaMatch[1].trim() : "";
    const period = metaMatch ? metaMatch[2].trim() : "";

    // Extract the description paragraph:
    // everything after the meta line, stripped of markdown syntax lines
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

export default async function ExperiencePage() {
  const filePath = path.join(process.cwd(), "content", "experience.mdx");
  const raw = fs.readFileSync(filePath, "utf-8");

  const experiences = parseExperienceMdx(raw);

  return <ExperienceClient experiences={experiences} />;
}