// import { toast } from "react-toastify";
import axios from "axios";
import { ALL_BLOG, ALL_CATEGORIES, ALL_GAME, CONTACT_US, GAME_BY_CAT_ID, GAME_BY_UUID, GAMES_BY_SECTION, GET_ABOUT_US, GET_PRIVACY_POLICY, SEARCH_GAME, SINGLE_BLOG } from "../utils/constant";
import {
  setGameList,
} from "../redux/reducers/rootReducer";
import { setLoading, setError, clearError } from "../redux/reducers/statusSlice";
import { setCategoryList } from "../redux/reducers/categoryReducer";
import { setSingleGameList } from "../redux/reducers/singleGameReducer";
import { setBlogList } from "../redux/reducers/blogListReducer";
import { setSimilarGameList } from "../redux/reducers/similarGameReducer";
import { setBlogSingle } from "../redux/reducers/blogSingleReducer";
import { setCatWiseGame } from "../redux/reducers/catWiseGameReducer";
import { setAboutusList } from "../redux/reducers/aboutusListReducer";
import { setPrivacyPolicyList } from "../redux/reducers/privacyPolicyListReducer";
// const getToken = () => {
//   let user = localStorage.getItem("user");
//   if (user !== null) {
//     let data = JSON.parse(user);
//     return data.token;
//   } else {
//     return null;
//   }
// };
export const getUserFromAsyncStorage = () => {
  let user = localStorage.getItem("user");
  if (user !== null) {
    let data = JSON.parse(user);
    return data;
  } else {
    return null;
  }
};
// const getHeaders = () => {
//   return {
//     "Content-Type": "application/json",
//     "Cache-Control": "no-cache",
//     Accept: "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET, OPTIONS",
//     "Access-Control-Allow-Headers": "Authorization, Content-Type",
//     Authorization: "Bearer " + getToken(),
//   };
// };
const loaderStart=(dispatch)=>{  
  dispatch(setLoading(true));
  document.body.style.overflow = 'hidden';
}
const loaderStop=(dispatch)=>{
  dispatch(setLoading(false));
  document.body.style.overflow = 'auto';
}
export const getAllGame = (category_id, page = 1,searchInput="") => {
  return async (dispatch, getState) => {
   loaderStart(dispatch)
    dispatch(clearError());
    try {
      let url = `${ALL_GAME}?page=${page}`;
      if (category_id !== 0 && searchInput==="") {
        url = `${GAME_BY_CAT_ID}${category_id}/?page=${page}`;
      }else if(searchInput){
        url = `${SEARCH_GAME}${searchInput}`;
      }
      const response = await axios.get(url);

      // Append new data to existing game list
      const existingGames = getState().games.gameList;
      let newGames=[];
      if(searchInput){
         newGames = response.data;
      }else{
         newGames = page === 1 ? response.data.results : [...existingGames, ...response.data.results];
      }
      dispatch(setGameList(newGames));
      loaderStop(dispatch)
      return response.data.count;
    } catch (error) {
      console.error("Error fetching games:", error);
      dispatch(setError(error.message));
    } finally {
      loaderStop(dispatch)
    }
  };
};
export const getAllCategories = () => {
  return async (dispatch) => {
   loaderStart(dispatch)
    dispatch(clearError());
    try {
      const response = await axios.get(ALL_CATEGORIES);
      dispatch(setCategoryList(response.data));
      loaderStop(dispatch)
    } catch (error) {
      console.error("Error fetching games:", error);
      dispatch(setError(error.message));
    } finally {
      loaderStop(dispatch)
    }
  };
};
export const getGameByUUID = (uuid) => {
  return async (dispatch) => {
   loaderStart(dispatch)
    dispatch(clearError());
    try {
      const response = await axios.get(`${GAME_BY_UUID}${uuid}/`);
      dispatch(setSingleGameList(response.data));
      loaderStop(dispatch)
    } catch (error) {
      console.error("Error fetching games:", error);
      dispatch(setError(error.message));
    } finally {
      loaderStop(dispatch)
    }
  };
};


export const getSimilarGame = (category_id) => {
  return async (dispatch) => {
   loaderStart(dispatch)
    dispatch(clearError());
    try {      
      const response = await axios.get(`${GAME_BY_CAT_ID}${category_id}/?page=1`);
      dispatch(setSimilarGameList(response.data.results));
      loaderStop(dispatch)
    } catch (error) {
      console.error("Error fetching games:", error);
      dispatch(setError(error.message));
    } finally {
      loaderStop(dispatch)
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
      return response.data.data;

    });
};


export const getAllBlogList = (page = 1) => {
  return async (dispatch) => {
   loaderStart(dispatch)
    dispatch(clearError());
    try {
      const response = await axios.get(`${ALL_BLOG}?page=${page}`);
      dispatch(setBlogList(response.data));
      loaderStop(dispatch)
    } catch (error) {
      console.error("Error fetching Blog:", error);
      dispatch(setError(error.message));
    } finally {
      loaderStop(dispatch)
    }
  };
};

export const getSingleBlogList = (uuid) => {
  return async (dispatch) => {
   loaderStart(dispatch)
    dispatch(clearError());
    try {
      const response = await axios.get(`${SINGLE_BLOG}${uuid}/`);
      dispatch(setBlogSingle(response.data));
      loaderStop(dispatch)
    } catch (error) {
      console.error("Error fetching games:", error);
      dispatch(setError(error.message));
    } finally {
      loaderStop(dispatch)
    }
  };
};

export const getCatWiseGame = () => {
  return async (dispatch) => {
   loaderStart(dispatch)
    dispatch(clearError());
    try {
      const response = await axios.get(GAMES_BY_SECTION);
      dispatch(setCatWiseGame(response.data));
      loaderStop(dispatch)
    } catch (error) {
      console.error("Error fetching games:", error);
      dispatch(setError(error.message));
    } finally {
      loaderStop(dispatch)
    }
  };
};

export const getAboutUsData = () => {
  return async (dispatch) => {
   loaderStart(dispatch)
    dispatch(clearError());
    try {
      const response = await axios.get(GET_ABOUT_US);
      dispatch(setAboutusList(response.data));
      loaderStop(dispatch)
    } catch (error) {
      console.error("Error fetching games:", error);
      dispatch(setError(error.message));
    } finally {
      loaderStop(dispatch)
    }
  };
};
export const getPrivacyPolicyData = () => {
  return async (dispatch) => {
   loaderStart(dispatch)
    dispatch(clearError());
    try {
      const response = await axios.get(GET_PRIVACY_POLICY);
      dispatch(setPrivacyPolicyList(response.data));
      loaderStop(dispatch)
    } catch (error) {
      console.error("Error fetching games:", error);
      dispatch(setError(error.message));
    } finally {
      loaderStop(dispatch)
    }
  };
};