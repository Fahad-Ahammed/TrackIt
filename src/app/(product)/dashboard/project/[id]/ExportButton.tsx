"use client";

import { useState } from "react";
import { generateProjectMarkdown } from "@/lib/utils/MarkdownGenerator";
import { downloadMarkdown } from "@/lib/utils/downloadHelper";
import { Project } from "@prisma/client";
import { FiDownload } from "react-icons/fi";

type ExportButtonProps = {
  project: Project;
};

export default function ExportButton({ project }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  // Function to handle the export operation
  const handleExport = async () => {
    try {
      setIsExporting(true);
      const markdown = generateProjectMarkdown(project); // Generate markdown string for the project
      const filename = `${project.title.toLowerCase().replace(/\s+/g, "-")}.md`; // Trigger the markdown file download
      downloadMarkdown(markdown, filename);
    } catch (error) {
      console.error("Error exporting project:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    // Button to export the project as markdown
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="text-whie flex items-center gap-2 rounded-md bg-white px-4 py-2 text-[14px] shadow-md duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#5417D7] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 xl:text-base"
    >
      <FiDownload className="h-4 w-4 shrink-0" />
      {isExporting ? "Exporting..." : "Export as Markdown"}
    </button>
  );
}
