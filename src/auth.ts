import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

// Configure NextAuth for authentication
export const { auth, handlers, signIn, signOut } = NextAuth({
  // Use Prisma as an adapter to interact with the database
  adapter: PrismaAdapter(prisma),
...authConfig,
  // Define authentication providers
  providers: [
    CredentialsProvider({
      // Configure credentials provider with email and password
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check if credentials are provided
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const email = (credentials.email as string).toLowerCase();
        const password = credentials.password as string;

        try {
          // Find user in the database using the provided email
          const user = await prisma.user.findUnique({
            where: { email: email },
          });

          // If no user found, throw an error
          if (!user) {
            throw new Error("No user found with the email");
          }

          // Validate the provided password by comparing with stored hash
          const isPasswordValid = await bcrypt.compare(password, user.password);

          // If password is incorrect, throw an error
          if (!isPasswordValid) {
            throw new Error("Incorrect password");
          }

          // Return the user details on successful authentication
          return { id: user.id, email: user.email, name: user.name };
        } catch (error) {
          // Handle and rethrow errors for authentication failure
          if (error instanceof Error) {
            throw new Error("Authentication failed: " + error.message);
          } else {
            throw new Error("Unknown error during authentication");
          }
        }
      },
    }),
  ],
});
