import mongoose from "mongoose";

const debateSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    }
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
  startedAt: Date,
  endedAt: Date,
}, { timestamps: true });

const Debate = mongoose.model("Debate", debateSchema);
export default Debate;
