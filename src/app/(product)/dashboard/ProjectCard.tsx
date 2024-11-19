"use client";

import Link from "next/link";
import { Project } from "@prisma/client";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { deleteProject } from "@/actions/dashboard/project";
import { formatDate } from "@/lib/utils/dateFormater";

type ProjectCardProps = {
  project: Project;
  index: number;
  userId: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  userId,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const totalTodos = project.todos.length;

  const completedTodos = project.todos.filter(
    (todo) => todo.status === "COMPLETED",
  ).length; // Count of completed todos

  const progress = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0; // Calculate progress as a percentage
  const isCompleted = progress === 100; // Check if the project is fully completed

  // Handle project deletion
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setIsDeleting(true);
      try {
        await deleteProject(userId, index); // Delete the project
      } catch (error) {
        console.error("Failed to delete project:", error);
        alert("Failed to delete project. Please try again."); // Show error message to the user
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="relative flex overflow-hidden rounded-[15px] bg-white shadow-md transition-shadow duration-300 hover:shadow-[0px_0px_8px_rgba(84,23,215,0.4)]">
      {/* Link to the detailed project view */}
      <Link href={`/dashboard/project/${index}`} className="block w-full p-6">
        <h2 className="mb-2 truncate text-xl font-bold capitalize">
          {project.title}
        </h2>
        <p className="mb-4 text-[14px] text-gray-700">
          Created: {formatDate(project.createdAt)} {/* Project creation date */}
        </p>
        {/* Progress bar */}
        <div className="mb-2">
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-[#9b4dff] via-[#6d50c4] to-[#5417D7]"
              style={{ width: `${progress}%` }} // Dynamic progress width
            ></div>
          </div>
        </div>
        <p className="truncate text-[14px] text-gray-700">
          Progress: {completedTodos}/{totalTodos} todos completed{" "}
          {/* Todo progress */}
        </p>
      </Link>

      {/* Delete button, shown only when all the project's todos are completed */}
      {isCompleted && (
        <button
          onClick={handleDelete}
          disabled={isDeleting} // Disable button during deletion
          className="absolute right-[10px] top-[10px] text-gray-500 hover:text-red-700 disabled:opacity-50"
          aria-label="Delete project"
        >
          <FaTrash className="w-7px h-7" />
        </button>
      )}
    </div>
  );
};

export default ProjectCard;
