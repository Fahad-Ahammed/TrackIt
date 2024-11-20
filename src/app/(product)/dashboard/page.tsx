import { auth } from "@/auth";
import { getProjects } from "@/actions/dashboard/project";
import ProjectCard from "./ProjectCard";
import AddProjectForm from "./AddProjectForm";
import { Project } from "@prisma/client";
import { redirect } from "next/navigation";

// Dashboard component to display user's projects
const Dashboard = async () => {
  // Authenticate the user and get session details
  const session = await auth();

  // If no user is logged in, redirect to sign in page
  if (!session || !session.user) {
    redirect("/sign-in");
  }

  const userId = session?.user?.id || "";

  // Fetch the user's projects
  const response = await getProjects(userId);
  const projects = response?.projects || []; //

  return (
    <div className="mt-[65px] min-h-screen flex-grow bg-[#f8f8f8] p-6 md:mt-0 md:px-[50px]">
      {/* Heading for the projects section */}
      <h1 className="mb-[25px] text-[32px] font-bold leading-[32px] md:mb-[50px]">
        Projects
      </h1>

      {/* Form to add a new project */}
      <AddProjectForm projectLength={projects.length} userId={userId} />

      {/* Grid layout to display all projects */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {projects.map((project: Project, index: number) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            userId={userId}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
