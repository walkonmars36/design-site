import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  projectId: "azfpwdmk",
  dataset: "production",
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: "http://localhost:4321",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
  schema,
});
