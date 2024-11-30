"use client";

import { useState, useRef } from "react";
import {
  updateTodo,
  removeTodo,
  toggleTodoStatus,
} from "@/actions/dashboard/todo";
import { TodoStatus } from "@prisma/client";
import { formatDate } from "@/lib/utils/dateFormater";
import InputField from "@/components/InputField";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TodoWithIndex } from "./page";

type TodoListProps = {
  userId: string;
  projectIndex: number;
  todos: TodoWithIndex[];
  status: TodoStatus;
};

const TodoList: React.FC<TodoListProps> = ({
  userId,
  projectIndex,
  todos,
  status,
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [loader, setLoader] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null); // Reference for managing DOM focus during edit mode

  // Initiates the edit mode for a specific todo
  const handleEdit = (index: number) => {
    // Automatically focuses the title input field when edit mode is activated
    setTimeout(() => {
      if (ref.current) {
        const inputElement =
          ref.current?.querySelector<HTMLInputElement>("#update-todo-title");
        inputElement?.focus();
      }
    }, 0);
    setEditingIndex(index);
    setEditTitle(todos[index].title);
    setEditDescription(todos[index].description);
  };

  // Handles updating a todo's title and description
  const handleUpdate = async (index: number) => {
    setLoader(true);
    if (editTitle.trim() && editDescription.trim())
      await updateTodo(userId, projectIndex, index, {
        title: editTitle,
        description: editDescription,
      });
    setEditingIndex(null); // Exit edit mode after the update
    setLoader(false);
  };

  // Removes a todo from the list
  const handleRemove = async (index: number) => {
    await removeTodo(userId, projectIndex, index);
  };

  // Toggles the status of a todo (PENDING <-> COMPLETED)
  const handleToggleStatus = async (index: number) => {
    await toggleTodoStatus(userId, projectIndex, index);
  };

  return (
    <div className="space-y-4">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={`relative overflow-hidden break-words rounded-[15px] bg-[#f8f8f8] ${editingIndex === index ? "pt-[30px]" : "pt-[10px]"} px-[20px] pb-[20px] shadow-md transition-shadow duration-300 hover:shadow-[0px_0px_8px_rgba(84,23,215,0.4)]`}
        >
          {/* Render edit form if the current todo is being edited */}
          {editingIndex === index ? (
            <div ref={ref} className="space-y-2">
              {/* Input field for editing the todo title */}
              <InputField
                id="update-todo-title"
                name="update-todo-title"
                type="text"
                labelBg="bg-[#f8f8f8]"
                value={editTitle}
                placeholder="Update title"
                onChange={(e) => setEditTitle(e.target.value)}
              />

              {/* Textarea for editing the todo description */}
              <div>
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Todo description"
                  className="mb-[20px] w-full rounded-[15px] border border-gray-300 bg-transparent px-[15px] py-[10px] text-[14px] leading-[18px] outline-none focus:border-[#5417D7] focus:shadow-[0px_4px_8px_rgba(84,23,215,0.4)] sm:text-[18px] sm:leading-[26px]"
                />
              </div>

              {/* Save button to update the todo */}
              <button
                disabled={loader === true}
                onClick={() => handleUpdate(todo.actualIndex)}
                className="relative z-[1] mx-auto block w-full rounded-[10px] bg-white px-[30px] py-[15px] text-center text-[18px] font-[600] leading-[22px] text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-[100%] before:w-[100%] before:rounded-[10px] before:bg-gradient-to-l before:from-[#5417D7] before:via-[#6d50c4] before:to-[#9b4dff] before:opacity-100 before:duration-[400ms] before:content-[''] after:absolute after:left-0 after:top-0 after:z-[-1] after:h-[100%] after:w-[100%] after:rounded-[10px] after:bg-gradient-to-r after:from-[#5417D7] after:via-[#6d50c4] after:to-[#9b4dff] after:opacity-0 after:duration-[400ms] after:content-[''] hover:before:opacity-0 hover:after:opacity-100 disabled:opacity-50"
              >
                save
              </button>
            </div>
          ) : (
            // Render todo details if not in edit mode
            <>
              <h3 className="mb-[10px] truncate text-[22px] font-semibold leading-[30px]">
                {todo.title}
              </h3>
              <p className="mb-[20px] text-gray-800">{todo.description}</p>

              <div className="flex items-center justify-between">
                <div className="">
                  <p className="text-[12px] text-gray-500 xl:text-sm">
                    {`Created: ${formatDate(todo.createdAt)}`}
                  </p>
                  <p className="text-[12px] text-gray-500 xl:text-sm">
                    {`Updated: ${formatDate(todo.updatedAt)}`}
                  </p>
                </div>

                {/* Toggle status button */}
                <button
                  onClick={() => handleToggleStatus(todo.actualIndex)}
                  className={`${status === "PENDING" ? "bg-green-500 hover:bg-green-600" : "bg-yellow-500 hover:bg-yellow-600"} rounded-[10px] px-[15px] py-[10px] text-center text-[14px] leading-[20px] text-white`}
                >
                  {status === "PENDING"
                    ? "Mark as Completed"
                    : "Mark as Pending"}
                </button>
              </div>

              {/* Edit button for pending todos */}
              {status === "PENDING" && (
                <button
                  onClick={() => handleEdit(index)}
                  className="absolute right-[45px] top-[15px] text-gray-500 hover:text-gray-800 disabled:opacity-50"
                  aria-label="Edit todo"
                >
                  <FiEdit />
                </button>
              )}

              {/* Delete button */}
              <button
                onClick={() => handleRemove(todo.actualIndex)}
                className="absolute right-[15px] top-[15px] text-gray-500 hover:text-red-700 disabled:opacity-50"
                aria-label="Delete todo"
              >
                <FaTrash />
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
