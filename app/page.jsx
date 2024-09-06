// import { GetTickets } from "@/actions/GetTicketDocuments";
"use server";
import { DeleteTicket } from "@/actions/DeleteTicket";
import TicketCard from "@/components/ticketCard";
import { Ticket } from "@/db/schemas/ticketSchema";
import db from "@/db/connection";

export default async function Home() {
  await db();
  const tickets = await Ticket.find({});
  // serializing the non-serialized data type in tixkets object such as _id or date.
  // const serializedTicketsData = JSON.parse(JSON.stringify(tickets));

  return (
    <>
      <TicketCard deleteTicket={DeleteTicket} tickets={tickets} />
    </>
  );
}
