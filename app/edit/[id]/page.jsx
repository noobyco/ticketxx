import CreateTicketForm from "@/components/createTicketForm";
import { EditTicket } from "@/actions/EditTicket";
import { Ticket } from "@/db/schemas/ticketSchema";
import db from "@/db/connection";
const Page = async (props) => {
  db();
  const defaultEditData = await Ticket.find({ _id: props.params.id });
  return (
    <div className="w-[80%] h-screen m-auto">
      <CreateTicketForm
        sendOrEditTicket={EditTicket}
        title="Edit Ticket"
        defaultData={defaultEditData}
        slug={props.params.id}
      />
      {/* <h1>{props.params.id}</h1> */}
    </div>
  );
};

export default Page;
