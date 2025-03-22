import type { Route } from "./+types/contact-destroy"
import { redirect } from "react-router"
import { deleteContact } from "../data"

export async function action({ params }: Route.ActionArgs) {
  await deleteContact(params.contactId);
  return redirect("/");
}
