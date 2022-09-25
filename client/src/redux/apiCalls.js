import { getEvents, postEvents } from "./eventRedux";
import { requestEvents } from "../Request";

export const fetchEvents = async (dispatch) => {
  try {
    const res = await requestEvents();
    dispatch(getEvents(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const uploadEvents = () => {
  postEvents();
};
