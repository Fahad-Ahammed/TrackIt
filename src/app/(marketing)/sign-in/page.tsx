import AuthPage from "@/templates/auth-page";
import {auth} from "@/auth"
import {redirect} from "next/navigation"
// Passes the "signIn" mode prop to AuthPage, which controls form behavior and ui for sign-in
export default async function SignIn() {
  const session=await auth();
  if(session){
    redirect("/dashboard")
  }
  return <AuthPage mode="signIn" />;
}