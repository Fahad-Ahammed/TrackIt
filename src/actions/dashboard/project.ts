"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

// Fetch all projects for a specific user
export async function getProjects(userId: string) {
  return await prisma.user.findUnique({
    where: { id: userId },
    select: { projects: true },
  });
}

// Add a new project for the user
export async function addProject(userId: string, title: string) {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      projects: {
        push: { title, createdAt: new Date(), todos: [] },
      },
    },
  });

  revalidatePath("/dashboard"); // Refresh the dashboard to show the changes
  return updatedUser.projects;
}

// Delete a project for the user by its index
export async function deleteProject(
  userId: string,
  projectIndex: number,
): Promise<void> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { projects: true },
  });

  if (!user || !user.projects[projectIndex]) {
    throw new Error("Project not found");
  }

  user.projects.splice(projectIndex, 1);

  await prisma.user.update({
    where: { id: userId },
    data: { projects: user.projects },
  });

  revalidatePath("/dashboard"); // Refresh the dashboard to show the changes
}
