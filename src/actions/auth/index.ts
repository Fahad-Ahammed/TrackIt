"use server";

import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { SignUpFormData } from "@/types";
import { revalidatePath } from "next/cache";

// server action to handle user login with email and password
export async function login(email: string, password: string) {
  try {
    // Attempt to sign in with provided credentials
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      return { success: false, error: res.error || "Invalid credentials" };
    }
    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (error instanceof AuthError) {
      return { success: false, error: "Invalid credentials" };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

// server action to handle user registration
export async function signUp(data: SignUpFormData) {
  try {
    // Check if the user already exists by email
    const existingUser = await prisma?.user?.findUnique({
      where: {
        email: data.email.toLowerCase(),
      },
    });

    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Hash the user's password for security
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create a new user in the database with hashed password
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email.toLowerCase(),
        password: hashedPassword,
        projects: [], // Initialize with empty projects
      },
    });

    return {
      success: true,
      message: "User created successfully",
      userId: newUser.id,
    };
  } catch (error) {
    if (error instanceof Error)
      return {
        success: false,
        error: error.message,
      };
    return {
      success: false,
      error: "something went wrong",
    };
  }
}

export const logout = async () => {
  await signOut({ redirectTo: "/sign-in" });
  revalidatePath("/sign-in");
};
