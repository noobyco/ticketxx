"use client";
import { useRouter } from "next/navigation";

const CreateTicketForm = (props) => {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/");
  };
  const updateUserWithId = props.sendOrEditTicket.bind(null, props.slug);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">{props.title}</h1>
          <button
            className="bg-blue-600 text-white font-bold p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={handleReturn}
          >
            Return to Homepage
          </button>
        </div>

        <form className="flex flex-col space-y-4" action={updateUserWithId}>
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              defaultValue={
                props.defaultData ? props.defaultData[0].title : undefined
              }
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              defaultValue={
                props.defaultData ? props.defaultData[0].description : undefined
              }
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 font-semibold mb-2"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              defaultValue={
                props.defaultData ? props.defaultData[0].category : undefined
              }
            >
              <option value="cars">Cars</option>
              <option value="software">Software</option>
              <option value="bike">Bike</option>
              <option value="laptop">Laptop</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="priority"
                className="block text-gray-700 font-semibold mb-2"
              >
                Priority
              </label>
              <input
                type="number"
                id="priority"
                name="priority"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                defaultValue={
                  props.defaultData ? props.defaultData[0].priority : undefined
                }
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor="progress"
                className="block text-gray-700 font-semibold mb-2"
              >
                Progress
              </label>
              <input
                type="number"
                id="progress"
                name="progress"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                defaultValue={
                  props.defaultData ? props.defaultData[0].progress : undefined
                }
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-gray-700 font-semibold mb-2"
            >
              Status
            </label>
            <select
              name="status"
              id="status"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              defaultValue={
                props.defaultData ? props.defaultData[0].status : null
              }
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="active"
              name="active"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              defaultChecked={
                props.defaultData
                  ? props.defaultData[0].active.toString()
                  : undefined
              }
            />
            <label htmlFor="active" className="text-gray-700 font-semibold">
              Active
            </label>
          </div>

          <button
            className="bg-blue-600 text-white font-bold p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            type="submit"
          >
            {props.title}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketForm;
