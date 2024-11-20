import { auth } from "@/auth";
import { getProjects } from "@/actions/dashboard/project";
import { Project } from "@prisma/client";
import ProjectTitle from "./ProjectTitle";
import ExportButton from "./ExportButton";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { redirect } from "next/navigation";
import { Todo } from "@prisma/client";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

type ProjectPageProps = {
  params: { id: string };
};
export type TodoWithIndex = Todo & { actualIndex: number };

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  // Authenticate the user session
  const session = await auth();
  if (!session) {
    redirect("/sign-in");
  }

  const userId = session?.user?.id || "";

  // Parse the project index from the URL parameter
  const projectIndex = parseInt(params.id);

  const fetchProjects = await getProjects(userId);

  // Retrieve the specific project based on the project index
  const project = fetchProjects?.projects[projectIndex] as Project | undefined;

  if (!project) {
    redirect("/sign-in");
  }

  // Filter todos by pending status and add actualIndex for tracking
  const pendingTodos: TodoWithIndex[] = project.todos
    .map((todo, index) => ({ ...todo, actualIndex: index }))
    .filter((todo) => todo.status === "PENDING");

  // Filter todos by completed status and add actualIndex for tracking
  const completedTodos: TodoWithIndex[] = project.todos
    .map((todo, index) => ({ ...todo, actualIndex: index }))
    .filter((todo) => todo.status === "COMPLETED");

  return (
    <div className="mt-[65px] min-h-screen flex-grow bg-[#f8f8f8] p-6 md:mt-0 md:px-[50px]">
      {/* top Section: Back button and project title */}
      <div className="mb-6 flex items-start justify-between gap-x-[5px] break-words md:mb-[50px]">
        <div className="flex flex-col gap-y-[25px]">
          <Link
            href={"/dashboard"}
            className="flex w-fit items-center gap-[2px] rounded-md bg-white py-2 pl-[10px] pr-[15px] text-[14px] text-black/80 shadow-md duration-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-[#5417D7] focus:ring-offset-2 xl:text-base"
          >
            <FiArrowLeft className="h-4 w-4 shrink-0" />
            <span className="text-[16px] leading-[20px]">Back</span>
          </Link>

          {/* Editable project title */}
          <ProjectTitle
            userId={userId}
            projectIndex={projectIndex}
            initialTitle={project.title}
          />
        </div>

        {/* Export button*/}
        <ExportButton project={project} />
      </div>

      {/* Main content: Add Todo form and Todo lists */}
      <div className="mx-auto grid max-w-[500px] grid-cols-1 gap-6 xl:mx-[unset] xl:max-w-[unset] xl:grid-cols-3">
        {/* Add Todo form section */}
        <div className="my-[30px] h-fit xl:sticky xl:top-[40px] xl:my-0">
          <h2 className="mb-4 text-xl font-semibold">Add Todo</h2>
          <AddTodoForm userId={userId} projectIndex={projectIndex} />
        </div>

        {/* Display pending todos if available */}
        {pendingTodos.length > 0 && (
          <div className="rounded-[15px] bg-white p-[15px]">
            <h2 className="mb-4 text-xl font-semibold">Pending Todos</h2>
            <TodoList
              userId={userId}
              projectIndex={projectIndex}
              todos={pendingTodos}
              status="PENDING"
            />
          </div>
        )}

        {/* Display completed todos if available */}
        {completedTodos.length > 0 && (
          <div className="rounded-[15px] bg-white p-[15px]">
            <h2 className="mb-4 text-xl font-semibold">Completed Todos</h2>
            <TodoList
              userId={userId}
              projectIndex={projectIndex}
              todos={completedTodos}
              status="COMPLETED"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
