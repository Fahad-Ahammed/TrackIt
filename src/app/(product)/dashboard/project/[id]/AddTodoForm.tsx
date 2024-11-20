"use client";

import { useState } from "react";
import { addTodo } from "@/actions/dashboard/todo";
import InputField from "@/components/InputField";

type AddTodoFormProps = {
  userId: string; 
  projectIndex: number;
};

const AddTodoForm: React.FC<AddTodoFormProps> = ({ userId, projectIndex }) => {

  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState(false);

  // Handles the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      setLoader(true);
      await addTodo(userId, projectIndex, title, description); // Call the action to add the todo

      setTitle(""); // Reset the title input field

      setDescription(""); // Reset the description input field

      setLoader(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the todo title */}
      <div>
        <InputField
          id="todo-title"
          name="todo-title"
          type="text"
          labelBg="bg-[#f8f8f8]"
          value={title}
          placeholder="Todo title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Textarea for the todo description */}
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Todo description"
          className="mb-[20px] w-full rounded-[15px] border border-gray-300 bg-transparent px-[15px] py-[10px] text-[14px] leading-[18px] outline-none focus:border-[#5417D7] focus:shadow-[0px_4px_8px_rgba(84,23,215,0.4)] sm:text-[18px] sm:leading-[26px]"
        />
      </div>

      {/* Submit button to add the todo */}
      <button
        type="submit"
        disabled={loader === true} // Disable the button when the loader is active
        className="relative z-[1] mx-auto block w-full rounded-[10px] bg-white px-[30px] py-[15px] text-center text-[18px] font-[600] leading-[22px] text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-[100%] before:w-[100%] before:rounded-[10px] before:bg-gradient-to-l before:from-[#5417D7] before:via-[#6d50c4] before:to-[#9b4dff] before:opacity-100 before:duration-[400ms] before:content-[''] after:absolute after:left-0 after:top-0 after:z-[-1] after:h-[100%] after:w-[100%] after:rounded-[10px] after:bg-gradient-to-r after:from-[#5417D7] after:via-[#6d50c4] after:to-[#9b4dff] after:opacity-0 after:duration-[400ms] after:content-[''] hover:before:opacity-0 hover:after:opacity-100 disabled:opacity-50"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
