"use server";
import db from "@/db/connection";
import { Ticket } from "@/db/schemas/ticketSchema";
import { revalidatePath } from "next/cache";

export const DeleteTicket = async (title) => {
  await db();
  const res = await Ticket.deleteOne({ title: title });
  console.log(res.deletedCount);
  revalidatePath("/");
};
