export const actionTypes = {
    SET_ALL_GAME: "SET_ALL_GAME",
    ALL_CATEGORIES: "ALL_CATEGORIES",
    CONTACT_US: "CONTACT_US",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_ALL_GAME:
        return {
          ...state,
          gameList: action.gameList,
        };
      case actionTypes.ALL_CATEGORIES:
        return {
          ...state,
          categoriesList: action.categoriesList,
        };
      case actionTypes.CONTACT_US:
        return {
          ...state,
          contactUs: action.contactUs,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  