"use server";
import db from "@/db/connection";
import { Ticket } from "@/db/schemas/ticketSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const EditTicket = async (id, formData) => {
  db();
  //   const id = formData.get("_id");
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  const priority = formData.get("priority");
  const progress = formData.get("progress");
  const status = formData.get("status");
  const active = formData.get("active") === "true" ? true : false;

  await Ticket.updateOne(
    { _id: id },
    { title, description, category, priority, progress, status, active }
  );
  redirect("/");
};
