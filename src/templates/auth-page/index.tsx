"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login, signUp } from "@/actions/auth";
import { SignInFormData, SignUpFormData, FormErrors } from "@/types";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

type AuthMode = "signIn" | "signUp";

type AuthPageProps = {
  mode: AuthMode;
};

// Main template to render the authentication page
export default function AuthPage({ mode }: AuthPageProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<SignInFormData | SignUpFormData>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  // Frontend Form validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate the 'name' field only for sign-up mode, ensuring it's at least 3 characters long
    if (
      mode === "signUp" &&
      "name" in formData &&
      formData.name.trim().length < 3
    ) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Validate the password length (minimum 6 characters)
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);

    // Return true if there are no validation errors, otherwise return false
    return Object.keys(newErrors).length === 0;
  };

  // Update form data and clear specific error on input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" }); // Clear error for the input field being modified
    setFormData((prev) => ({ ...prev, [name]: value })); // Update form data
  };

  // Handle form submission for login or sign up
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return; // Validate form and stop submission if invalid
    setIsLoading(true); // Show loading indicator
    try {
      if (mode === "signIn") {
        // Handle sign in mode
        const res = await login(formData.email, formData.password);
        if (res.success) {
          router.push("/dashboard"); // Navigate to dashboard on success
        } else {
          setErrors((prev) => ({ ...prev, serverError: res.error })); // Show server error
          setTimeout(
            () => setErrors((prev) => ({ ...prev, serverError: "" })),
            4000,
          ); // Clear error after 4 seconds
        }
      } else {
        // Handle sign up mode
        const signUpResponse = await signUp(formData as SignUpFormData);
        if (signUpResponse.success) {
          const signInResponse = await login(formData.email, formData.password); // Automatically sign in on successful sign up
          if (signInResponse.success) router.push("/dashboard"); // Navigate to dashboard
        } else {
          setErrors((prev) => ({ ...prev, serverError: signUpResponse.error }));
          setTimeout(
            () => setErrors((prev) => ({ ...prev, serverError: "" })),
            4000,
          ); // Clear error after 4 seconds
        }
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        serverError: (error as Error).message, // Handle unexpected errors
      }));
    } finally {
      setIsLoading(false); // Reset Loader
    }
  };

  return (
    <div className="mx-auto my-[15px] flex min-h-[calc(100vh-115px)] w-[90%] max-w-[1300px] max-lg:rounded-[20px] max-lg:bg-[#f8f8f8]">
      <div className="flex w-full flex-col justify-between p-8 lg:w-1/2">
        <div className="mx-auto w-full max-w-md">
          {/* Header text based on mode */}
          <div className="mb-[45px]">
            <h1 className="mb-[5px] text-[32px] font-semibold leading-[40px]">
              {mode === "signIn" ? "Hey, time to Sign in" : "Get Started Now"}
            </h1>
            {mode === "signUp" && (
              <p className="text-[14px] font-semibold leading-[20px]">
                Enter your credentials to create your account
              </p>
            )}
          </div>

          {/* Buttons for Google and Apple authentication */}
          <div className="mb-[40px] flex gap-[20px]">
            <button className="flex w-1/2 items-center justify-center gap-x-[5px] rounded-[15px] border border-gray-300 px-[30p] py-[10px] text-sm font-[500]">
              <FcGoogle className="h-[25px] w-[25px] sm:h-[18px] sm:w-[18px]" />
              <span className="hidden sm:inline">
                {mode === "signIn"
                  ? "Log in with Google"
                  : "Sign Up with Google"}
              </span>
            </button>
            <button className="flex w-1/2 items-center justify-center gap-x-[5px] rounded-[15px] border border-gray-300 px-[30p] py-[10px] text-sm font-[500]">
              <AiFillApple className="h-[28px] w-[28px] sm:h-[20px] sm:w-[20px]" />
              <span className="hidden sm:inline">
                {mode === "signIn" ? "Log in with Apple" : "Sign Up with Apple"}
              </span>
            </button>
          </div>

          {/* Divider with 'or' text */}
          <p className="before-content-[''] after-content-[''] relative mb-[30px] text-center text-[14px] leading-[14px] text-black/50 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-[47%] before:bg-gray-300 after:absolute after:right-0 after:top-1/2 after:h-[1px] after:w-[47%] after:bg-gray-300">
            or
          </p>

          {/* Main form for email/password authentication */}
          <form onSubmit={handleSubmit}>
            {/* Name input only displayed in signUp mode */}
            {mode === "signUp" && (
              <InputField
                id="name"
                name="name"
                placeholder="Name"
                value={(formData as SignUpFormData).name}
                error={errors.name}
                onChange={handleChange}
              />
            )}
            <InputField
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
            />
            <InputField
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              error={errors.password}
              onChange={handleChange}
            />

            {/* Display server error if present */}
            <div
              className={`${errors.serverError ? "max-h-[100px]" : "max-h-0"} relative left-[10px] text-[16px] font-[500] leading-[16px] text-red-500 duration-300 ease-in-out`}
            >
              {errors.serverError}
            </div>

            {/* Submit button with loading indicator */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative z-[1] mx-auto mt-[40px] block w-full rounded-[10px] bg-white px-[30px] py-[15px] text-center text-[18px] font-[600] leading-[22px] text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-[100%] before:w-[100%] before:rounded-[10px] before:bg-gradient-to-l before:from-[#5417D7] before:via-[#6d50c4] before:to-[#9b4dff] before:opacity-100 before:duration-[400ms] before:content-[''] after:absolute after:left-0 after:top-0 after:z-[-1] after:h-[100%] after:w-[100%] after:rounded-[10px] after:bg-gradient-to-r after:from-[#5417D7] after:via-[#6d50c4] after:to-[#9b4dff] after:opacity-0 after:duration-[400ms] after:content-[''] hover:before:opacity-0 hover:after:opacity-100 disabled:opacity-50"
            >
              {isLoading
                ? mode === "signIn"
                  ? "Signing In..."
                  : "Signing Up..."
                : mode === "signIn"
                  ? "Sign In"
                  : "Sign Up"}
            </button>
          </form>

          {/* Link to toggle between sign in and sign up */}
          <p className="text-muted-foreground mt-4 text-left text-sm">
            {mode === "signIn" ? "Don't have an account?" : "Have an account?"}{" "}
            <Link
              href={mode === "signIn" ? "/sign-up" : "/sign-in"}
              className="hover:underline"
            >
              {mode === "signIn" ? "Sign up" : "Sign in"}
            </Link>
          </p>
        </div>
      </div>

      {/*  Displays product info for user overview */}
      <div className="hidden rounded-[20px] bg-gradient-to-r from-[#9b4dff] via-[#6d50c4] to-[#5417D7] lg:flex lg:w-1/2">
        <div className="flex flex-col items-center justify-center p-8 text-white">
          <h2 className="mb-4 text-3xl font-bold">
            The simplest way to manage your workforce
          </h2>
          <p className="mb-8 text-center">
            Enter your credentials to access your account
          </p>
          <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

// Reusable InputField component for form inputs
function InputField({
  id,
  name,
  placeholder,
  type = "text",
  value,
  error,
  onChange,
}: {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative mb-[15px] sm:mb-[20px]">
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`peer h-[54px] w-full rounded-[15px] border bg-transparent px-[15px] py-[10px] text-[14px] leading-[18px] placeholder-transparent outline-none sm:text-[18px] sm:leading-[26px] ${
          error
            ? "border-red-500"
            : "border-gray-300 focus:border-[#5417D7] focus:shadow-[0px_4px_8px_rgba(84,23,215,0.4)]"
        }`}
        type={type}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-[10px] top-[-8px] bg-[#f8f8f8] text-[14px] leading-[16px] text-black duration-200 ease-in-out peer-placeholder-shown:left-[15px] peer-placeholder-shown:top-[20px] peer-placeholder-shown:text-[14px] peer-focus:left-[10px] peer-focus:top-[-8px] peer-focus:text-[14px] peer-focus:leading-[16px] sm:text-[16px] sm:peer-placeholder-shown:text-[16px] sm:peer-focus:text-[16px] lg:bg-white"
      >
        {placeholder}
      </label>
      {error && (
        <span className="relative left-[10px] bg-[#f8f8f8] text-[14px] leading-[16px] text-red-500 sm:absolute sm:left-[unset] sm:right-[15px] sm:top-[-8px] lg:bg-white">
          {error}
        </span>
      )}
    </div>
  );
}
