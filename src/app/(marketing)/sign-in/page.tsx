import AuthPage from "@/templates/auth-page";

// Passes the "signIn" mode prop to AuthPage, which controls form behavior and ui for sign-in
export default function SignIn() {
  return <AuthPage mode="signIn" />;
}