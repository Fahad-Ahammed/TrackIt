import AuthPage from "@/templates/auth-page";
import {redirect} from "next/navigation"
import {auth} from "@/auth"
// Passes the "signUp" mode prop to AuthPage, which controls form behavior and ui for sign-up
export default async function SignUp() {
  const session=await auth();
  if(session){
    redirect("/dashboard")
  }
  return <AuthPage mode="signUp" />;
}
