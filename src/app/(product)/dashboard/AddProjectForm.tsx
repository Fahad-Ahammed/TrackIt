"use client";

import { useState } from "react";
import { addProject } from "@/actions/dashboard/project";
import InputField from "@/components/InputField";

type AddProjectFormProps = {
  userId: string; 
};

const AddProjectForm: React.FC<AddProjectFormProps> = ({ userId }) => {
  const [title, setTitle] = useState("");

  // Handle the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    if (title.trim()) {
      await addProject(userId, title); // Add the new project using the provided action
      setTitle(""); // Clear the input field after adding the project
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[400px] items-center gap-x-[10px]"
    >
      {/* Input field for the project title */}
      <InputField
        name="project-title"
        id="project-title"
        type="text"
        value={title} 
        labelBg="bg-[#f8f8f8]"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Create new project"
      />
      {/* Submit button styled with gradients and hover effects */}
      <button
        type="submit"
        className="md:leading-[386px relative z-[1] mt-[-15px] block h-[45px] w-[45px] rounded-full bg-white text-center text-base font-[600] leading-[22px] text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-[100%] before:w-[100%] before:rounded-full before:bg-gradient-to-l before:from-[#5417D7] before:via-[#6d50c4] before:to-[#9b4dff] before:opacity-100 before:duration-[400ms] before:content-[''] after:absolute after:left-0 after:top-0 after:z-[-1] after:h-[100%] after:w-[100%] after:rounded-full after:bg-gradient-to-r after:from-[#5417D7] after:via-[#6d50c4] after:to-[#9b4dff] after:opacity-0 after:duration-[400ms] after:content-[''] hover:before:opacity-0 hover:after:opacity-100 md:text-[28px]"
      >
        {/* Plus icon inside the button */}
        <span className="relative md:top-[-2px]">+</span>
      </button>
    </form>
  );
};

export default AddProjectForm;
