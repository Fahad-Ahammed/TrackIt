// "use server";

// import { revalidatePath } from "next/cache";
// import prisma from "@/lib/prisma";

// export async function addTodo(
//   userId: string,
//   projectIndex: number,
//   title: string,
//   description: string,
// ) {
//   const user = await prisma.user.findUnique({
//     where: { id: userId },
//     include: { projects: true },
//   });

//   if (!user || !user.projects[projectIndex]) {
//     throw new Error("Project not found");
//   }

//   user.projects[projectIndex].todos.push({
//     title,
//     description,
//     status: "PENDING",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   });

//   await prisma.user.update({
//     where: { id: userId },
//     data: { projects: user.projects },
//   });

//   revalidatePath(`/dashboard/project/${projectIndex}`);
// }

// export async function updateTodo(
//   userId: string,
//   projectIndex: number,
//   todoIndex: number,
//   data: { title: string; description: string },
// ) {
//   const user = await prisma.user.findUnique({
//     where: { id: userId },
//     include: { projects: true },
//   });

//   if (
//     !user ||
//     !user.projects[projectIndex] ||
//     !user.projects[projectIndex].todos[todoIndex]
//   ) {
//     throw new Error("Todo not found");
//   }

//   user.projects[projectIndex].todos[todoIndex] = {
//     ...user.projects[projectIndex].todos[todoIndex],
//     ...data,
//     updatedAt: new Date(),
//   };

//   await prisma.user.update({
//     where: { id: userId },
//     data: { projects: user.projects },
//   });

//   revalidatePath(`/dashboard/project/${projectIndex}`);
// }

// export async function removeTodo(
//   userId: string,
//   projectIndex: number,
//   todoIndex: number,
// ) {
//   const user = await prisma.user.findUnique({
//     where: { id: userId },
//     include: { projects: true },
//   });

//   if (!user || !user.projects[projectIndex]) {
//     throw new Error("Project not found");
//   }

//   user.projects[projectIndex].todos.splice(todoIndex, 1);

//   await prisma.user.update({
//     where: { id: userId },
//     data: { projects: user.projects },
//   });

//   revalidatePath(`/dashboard/project/${projectIndex}`);
// }

// export async function toggleTodoStatus(
//   userId: string,
//   projectIndex: number,
//   todoIndex: number,
// ): Promise<void> {
//   const user = await prisma.user.findUnique({
//     where: { id: userId },
//     include: { projects: true },
//   });

//   if (
//     !user ||
//     !user.projects[projectIndex] ||
//     !user.projects[projectIndex].todos[todoIndex]
//   ) {
//     throw new Error("Todo not found");
//   }

//   const currentStatus = user.projects[projectIndex].todos[todoIndex].status;
//   const newStatus = currentStatus === "PENDING" ? "COMPLETED" : "PENDING";

//   user.projects[projectIndex].todos[todoIndex] = {
//     ...user.projects[projectIndex].todos[todoIndex],
//     status: newStatus,
//     updatedAt: new Date(),
//   };

//   await prisma.user.update({
//     where: { id: userId },
//     data: { projects: user.projects },
//   });

//   revalidatePath(`/dashboard/project/${projectIndex}`);
// }

"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

// Function to add a new todo item to a user's specific project
export async function addTodo(
  userId: string,
  projectIndex: number, // Index of the project to which the todo will be added
  title: string, 
  description: string, 
) {
  // Fetch the user and include their projects in the query
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { projects: true },
  });

  // Check if the user and specified project exist
  if (!user || !user.projects[projectIndex]) {
    throw new Error("Project not found");
  }

  // Add the new todo to the project's todos list
  user.projects[projectIndex].todos.push({
    title,
    description,
    status: "PENDING", // Default status for a new todo
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  // Update the user's projects in the database
  await prisma.user.update({
    where: { id: userId },
    data: { projects: user.projects },
  });

  // Revalidate the cache for the project page
  revalidatePath(`/dashboard/project/${projectIndex}`);
}

// Function to update an existing todo item in a user's specific project
export async function updateTodo(
  userId: string,
  projectIndex: number, // Index of the project containing the todo
  todoIndex: number, // Index of the todo to update
  data: { title: string; description: string }, // New data for the todo
) {
  // Fetch the user and include their projects in the query
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { projects: true },
  });

  // Check if the user, project, and todo exist
  if (
    !user ||
    !user.projects[projectIndex] ||
    !user.projects[projectIndex].todos[todoIndex]
  ) {
    throw new Error("Todo not found");
  }

  // Update the todo with the new data and update timestamp
  user.projects[projectIndex].todos[todoIndex] = {
    ...user.projects[projectIndex].todos[todoIndex],
    ...data,
    updatedAt: new Date(),
  };

  // Update the user's projects in the database
  await prisma.user.update({
    where: { id: userId },
    data: { projects: user.projects },
  });

  // Revalidate the cache for the dashboard project page
  revalidatePath(`/dashboard/project/${projectIndex}`);
}

// Function to remove a todo item from a user's specific project
export async function removeTodo(
  userId: string,
  projectIndex: number, // Index of the project containing the todo
  todoIndex: number, // Index of the todo to remove
) {
 
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { projects: true },
  });

  // Check if the user and project exist
  if (!user || !user.projects[projectIndex]) {
    throw new Error("Project not found");
  }

  // Remove the todo from the project's todos list
  user.projects[projectIndex].todos.splice(todoIndex, 1);

  // Update the user's projects in the database
  await prisma.user.update({
    where: { id: userId },
    data: { projects: user.projects },
  });

  // Revalidate the cache for the dashboard project page
  revalidatePath(`/dashboard/project/${projectIndex}`);
}

// Function to toggle the status of a todo item (PENDING <-> COMPLETED)
export async function toggleTodoStatus(
  userId: string,
  projectIndex: number, // Index of the project containing the todo
  todoIndex: number, // Index of the todo to toggle
): Promise<void> {

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { projects: true },
  });

  // Check if the user, project, and todo exist
  if (
    !user ||
    !user.projects[projectIndex] ||
    !user.projects[projectIndex].todos[todoIndex]
  ) {
    throw new Error("Todo not found");
  }

  // Get the current status of the todo and toggle it
  const currentStatus = user.projects[projectIndex].todos[todoIndex].status;
  const newStatus = currentStatus === "PENDING" ? "COMPLETED" : "PENDING";

  // Update the todo's status and update timestamp
  user.projects[projectIndex].todos[todoIndex] = {
    ...user.projects[projectIndex].todos[todoIndex],
    status: newStatus,
    updatedAt: new Date(),
  };

  // Update the user's projects in the database
  await prisma.user.update({
    where: { id: userId },
    data: { projects: user.projects },
  });

  // Revalidate the cache for the dashboard project page
  revalidatePath(`/dashboard/project/${projectIndex}`);
}
