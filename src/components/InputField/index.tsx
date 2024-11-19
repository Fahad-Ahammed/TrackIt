import { InputTypes } from "@/types";

// Reusable InputField component for form inputs
export default function InputField({
  id,
  name,
  placeholder,
  type = "text",
  value,
  labelBg,
  error,
  onChange,
}: InputTypes) {
  return (
    <div className="relative mb-[15px] sm:mb-[20px]">
      {/* Input field */}
      <input
        id={id}
        name={name}
        placeholder={placeholder} // Placeholder is set but styled as transparent
        value={value} // Controlled input value
        onChange={onChange} // Change handler to update parent state
        className={`peer h-[54px] w-full rounded-[15px] border bg-transparent px-[15px] py-[10px] text-[14px] leading-[18px] placeholder-transparent outline-none sm:text-[18px] sm:leading-[26px] ${
          error
            ? "border-red-500" // Apply red border if there's an error
            : "border-gray-300 focus:border-[#5417D7] focus:shadow-[0px_4px_8px_rgba(84,23,215,0.4)]" // Default and focus styles
        }`}
        type={type} // Input type (e.g., text, email)
      />

      {/* Label for the input */}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-[10px] top-[-8px] ${
          labelBg ? labelBg : "bg-[#f8f8f8] lg:bg-white" // Label background color
        } text-[14px] leading-[16px] text-black/60 duration-200 ease-in-out peer-placeholder-shown:left-[15px] peer-placeholder-shown:top-[20px] peer-placeholder-shown:text-[14px] peer-focus:left-[10px] peer-focus:top-[-8px] peer-focus:text-[14px] peer-focus:leading-[16px] peer-focus:text-black/75 sm:text-[14px] sm:peer-placeholder-shown:text-[16px] sm:peer-focus:text-[14px]`}
      >
        {placeholder} {/* Placeholder text shown as a label */}
      </label>

      {/* Error message display */}
      {error && (
        <span className="relative left-[10px] bg-[#f8f8f8] text-[14px] leading-[16px] text-red-500 sm:absolute sm:left-[unset] sm:right-[15px] sm:top-[-8px] lg:bg-white">
          {error} {/* Display error message */}
        </span>
      )}
    </div>
  );
}
