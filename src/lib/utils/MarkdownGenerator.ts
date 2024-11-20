import { Project } from "@prisma/client";

// Function to generate a markdown representation of a project and its todos
export function generateProjectMarkdown(project: Project): string {
  const todos = project.todos || [];
  const completedTodos = todos.filter((todo) => todo.status === "COMPLETED");

  // Generate the markdown string for the project
  const markdown = `# ${project.title}

Summary: ${completedTodos.length}/${todos.length} todos completed.

## Pending
${todos
  .filter((todo) => todo.status === "PENDING")
  .map((todo) => `- [ ] ${todo.title}`)
  .join("\n")}

## Completed
${todos
  .filter((todo) => todo.status === "COMPLETED")
  .map((todo) => `- [x] ${todo.title}`)
  .join("\n")}
`;

  return markdown;
}
