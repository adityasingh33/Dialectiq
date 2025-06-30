import Debate from "../models/debate.js";
import Message from "../models/message.js";

export const createDebate = async (req, res) => {
  const { topic } = req.body;

  try {
    const debate = await Debate.create({
      topic,
      participants: [req.user.id],
      startedAt: new Date(),
    });
    res.status(201).json(debate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const joinDebate = async (req, res) => {
  try {
    const debate = await Debate.findById(req.params.id);
    if (!debate) return res.status(404).json({ message: "Debate not found" });

    if (!debate.participants.includes(req.user.id)) {
      debate.participants.push(req.user.id);
      await debate.save();
    }

    res.json(debate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllDebates = async (req, res) => {
  const debates = await Debate.find().populate("participants", "username");
  res.json(debates);
};
