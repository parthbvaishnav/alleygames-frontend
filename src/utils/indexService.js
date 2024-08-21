// import { toast } from "react-toastify";
import axios from "axios";
import { ALL_BLOG, ALL_CATEGORIES, ALL_GAME, CONTACT_US, GAME_BY_CAT_ID, GAME_BY_UUID } from "../utils/constant";
import {
  setGameList,
} from "../redux/reducers/rootReducer";
import { setLoading, setError, clearError } from "../redux/reducers/statusSlice";
import { setCategoryList } from "../redux/reducers/categoryReducer";
import { setSingleGameList } from "../redux/reducers/singleGameReducer";
import { setBlogList } from "../redux/reducers/blogListReducer";
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
export const getAllGame = (category_id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(clearError());
    try {
      let url=ALL_GAME;
      if(category_id){
        url = `${GAME_BY_CAT_ID}${category_id}/`
      }
      const response = await axios.get(url);
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
export const getGameByUUID = (uuid) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(clearError());
    try {
      const response = await axios.get(`${GAME_BY_UUID}${uuid}/`);
      dispatch(setSingleGameList(response.data));
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


export const getAllBlogList = (page = 1) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(clearError());
    try {
      const response = await axios.get(`${ALL_BLOG}?page=${page}`);
      dispatch(setBlogList(response.data));
    } catch (error) {
      console.error("Error fetching Blog:", error);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
};