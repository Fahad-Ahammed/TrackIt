"use client";

import React, { useState } from "react";
import { updateProjectTitle } from "@/actions/dashboard/project";
import InputField from "@/components/InputField";

type ProjectTitleProps = {
  userId: string;
  projectIndex: number;
  initialTitle: string;
};

export default function ProjecTitle({
  userId,
  projectIndex,
  initialTitle,
}: ProjectTitleProps) {
  const [isEditing, setIsEditing] = useState(false); // State to track if the title is being edited

  const [title, setTitle] = useState(initialTitle);

  // Handle changes to the title input field
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Handle submission of the new title
  const handleTitleSubmit = async () => {
    if (title.trim() !== "") {
      await updateProjectTitle(userId, projectIndex, title); // Update the title in the backend
      setIsEditing(false);
    } else {
      setTitle(initialTitle); // Revert to the initial title if the input is empty
      setIsEditing(false);
    }
  };

  // Handle keyboard events for the title input field
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTitleSubmit();
    } else if (e.key === "Escape") {
      setTitle(initialTitle); // Revert to the initial title when the Escape key is pressed
      setIsEditing(false);
    }
  };

  // Render the input field when editing
  if (isEditing) {
    return (
      <div className="flex max-w-[150px] items-center md:max-w-[300px] xl:max-w-[600px]">
        <InputField
          id="project-title"
          name="project-title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleSubmit} // Submit the title when the input loses focus
          onKeyDown={handleKeyDown}
          autoFocus={true}
        />
      </div>
    );
  }

  // Render the title as a clickable heading when not editing
  return (
    <h1
      className="xl:max-[600px] max-w-[150px] cursor-pointer break-words text-[24px] font-[700] leading-[28px] text-black hover:text-[#36295b] md:max-w-[300px]"
      onClick={() => setIsEditing(true)} // Enable editing mode on click
    >
      {title}
    </h1>
  );
}
