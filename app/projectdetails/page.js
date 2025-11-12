import { redirect } from "next/navigation";

export default function ProjectDetailsHome() {
  redirect("/"); // send user back to home
  return null;
}