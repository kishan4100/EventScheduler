import mongoose from "mongoose";

const EventSchema = mongoose.Schema({
  tile: String,
  selectedFile: String,
  description: String,
  email: { type: String },
  validTill: { type: Date, default: new Date() },
  category: { type: String, required: true },
  location: { type: String },
  price: { type: String },
});

const Event = mongoose.model("event", EventSchema);

export default Event;
