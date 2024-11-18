import AuthPage from "@/templates/auth-page";

// Passes the "signUp" mode prop to AuthPage, which controls form behavior and ui for sign-up
export default function SignUp() {
  return <AuthPage mode="signUp" />;
}
