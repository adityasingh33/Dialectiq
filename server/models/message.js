import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  debate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Debate",
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isBot: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);
export default Message;
