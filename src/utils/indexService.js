// import { toast } from "react-toastify";
import axios from "axios";
import { ALL_CATEGORIES, ALL_GAME, CONTACT_US } from "../utils/constant";
import {
  setGameList,
} from "../redux/reducers/rootReducer";
import { setLoading, setError, clearError } from "../redux/reducers/statusSlice";
import { setCategoryList } from "../redux/reducers/categoryReducer";
const getToken = () => {
  let user = localStorage.getItem("user");
  if (user != null) {
    let data = JSON.parse(user);
    return data.token;
  } else {
    return null;
  }
};
export const getUserFromAsyncStorage = () => {
  let user = localStorage.getItem("user");
  if (user != null) {
    let data = JSON.parse(user);
    return data;
  } else {
    return null;
  }
};
const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
    Authorization: "Bearer " + getToken(),
  };
};
export const getAllGame = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(clearError());
    try {
      const response = await axios.get(ALL_GAME);
      dispatch(setGameList(response.data));
    } catch (error) {
      console.error("Error fetching games:", error);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
export const getAllCategories = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(clearError());
    try {
      const response = await axios.get(ALL_CATEGORIES);
      dispatch(setCategoryList(response.data));
    } catch (error) {
      console.error("Error fetching games:", error);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
};


export const submitContactForm = async ({ Name, Email, Message }) => {
  return await axios
    .post(
      CONTACT_US,
      {
        Name: Name,
        Email: Email,
        Message: Message,
      }
      // { headers: getHeaders() }
    )
    .then((response) => {
      console.log("response----submitContactForm------", response);
      return response.data.data;
    });
};
