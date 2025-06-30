import Message from "../models/message.js";
import Debate from "../models/debate.js";

export const sendMessage = async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;

  try {
    const debate = await Debate.findById(id);
    if (!debate) return res.status(404).json({ message: "Debate not found" });

    const message = await Message.create({
      debate: id,
      sender: req.user.id,
      content,
    });

    debate.messages.push(message._id);
    await debate.save();

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMessages = async (req, res) => {
  const { id } = req.params;

  try {
    const messages = await Message.find({ debate: id })
      .populate("sender", "username")
      .sort({ createdAt: 1 });
    
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteMessage = async (req, res) => {
  const { messageId } = req.params;

  try {
    const message = await Message.findById(messageId);
    if (!message) return res.status(404).json({ message: "Message not found" });

    // Check if the user is the sender or an admin
    if (message.sender.toString() !== req.user.id && !req.user.isAdmin) {
      return res.status(403).json({ message: "Not authorized to delete this message" });
    }

    await Message.findByIdAndDelete(messageId);
    res.json({ message: "Message deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};