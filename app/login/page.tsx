import { redirect } from "next/navigation"

export default function LoginPage() {
  // Skip the login page and redirect straight to the dashboard
  redirect("/dashboard")
}

