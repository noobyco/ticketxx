"use server";
import { Ticket } from "@/db/schemas/ticketSchema";
import db from "@/db/connection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const SendTickets = async (id, formData) => {
  await db();
  const active = (await formData.get("active")) == "on" ? true : false;
  await Ticket.create({
    title: formData.get("title"),
    description: await formData.get("description"),
    category: await formData.get("category"),
    priority: await formData.get("priority"),
    progress: await formData.get("progress"),
    status: await formData.get("status"),
    active: active,
  });
  revalidatePath("/");
  redirect("/");
};
