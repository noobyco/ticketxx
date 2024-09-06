import CreateTicketForm from "@/components/createTicketForm";
import { SendTickets } from "@/actions/SendTickets.js";

const Page = () => {
  return (
    <div className="w-[80%] h-screen m-auto">
      <CreateTicketForm sendOrEditTicket={SendTickets} title="Create Ticket" />
    </div>
  );
};

export default Page;
