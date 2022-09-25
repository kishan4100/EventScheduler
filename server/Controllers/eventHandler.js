import Event from "../Models/Event.js";

export const fetchEvents = async (req, res) => {
  try {
    const response = await Event.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.messsage);
  }
};

export const postEvents = async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    const response = await newEvent.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.messsage);
  }
};
