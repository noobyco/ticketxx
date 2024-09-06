import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    id: Schema.Types.UUID,
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Ticket =
  mongoose.models.ticket || mongoose.model("ticket", ticketSchema);
