import { createClient } from "@sanity/client";
import { readFileSync } from "fs";

const client = createClient({
  projectId: "azfpwdmk",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
});

const projects = JSON.parse(
  readFileSync("./src/data/project-data.json", "utf-8")
);

for (const project of projects) {
  const doc = {
    _type: "project",
    _id: `project-${project.id}`,
    title: project.title,
    slug: {
      _type: "slug",
      current: project.id,
    },
    excerpt: project.excerpt,
    heading: project.heading,
    url: project.url,
    services: project.services,
    tech: project.tech,
    objective: project.objective,
    process: project.process,
    result: project.result ?? "",
  };

  await client.createOrReplace(doc);
  console.log(`✓ Imported: ${project.title}`);
}

console.log("Done!");
