import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  // Configure session settings
  session: {
    strategy: "jwt", // Use JWT for session management
    maxAge: 3 * 24 * 60 * 60, // Set session max age to 3 days
  },

  // Define callbacks to customize token and session
  callbacks: {
    // Modify JWT token on sign-in
    jwt({ token, user }) {
      if (user) {
        // Store user ID in token for future requests
        token.id = user.id as string;
      }
      return token;
    },
    // Customize session returned to the client
    session({ session, token }) {
      if (session.user && token.id) {
        // Include user ID in the session for client access
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
