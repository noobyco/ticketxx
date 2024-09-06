"use client";
import { useRouter } from "next/navigation";

const TicketCard = (props) => {
  const router = useRouter();

  return (
    <main className="p-4 bg-gray-100 min-h-screen text-center">
      <a
        href="/create"
        className="inline-block p-2 mb-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Create Ticket
      </a>
      <h1 className="text-2xl font-bold mb-8">Tickets List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {props.tickets.map((ticket) => (
          <div key={ticket._id} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {ticket.title}
              </h2>
              <button
                onClick={() => {
                  router.push(`edit/${ticket._id}`);
                }}
              >
                Edit
              </button>
              <button
                onClick={async () => {
                  await props.deleteTicket(ticket.title);
                }}
              >
                X
              </button>
            </div>
            <p className="text-gray-700 mb-2">{ticket.description}</p>
            <div className="text-left">
              <p>
                <span className="font-bold">Category:</span> {ticket.category}
              </p>
              <p>
                <span className="font-bold">Priority:</span> {ticket.priority}
              </p>
              <p>
                <span className="font-bold">Progress:</span> {ticket.progress}
              </p>
              <p>
                <span className="font-bold">Status:</span> {ticket.status}
              </p>
              <p>
                <span className="font-bold">Active:</span>{" "}
                {ticket.active ? "Yes" : "No"}
              </p>
              <p className="font-bold">
                Date : {JSON.parse(JSON.stringify(ticket.date))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TicketCard;
