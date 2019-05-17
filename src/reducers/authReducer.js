// import { CREATE_GIFT_CARD } from "../actions/ActionTypes";

const initialState = {};

const authReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case CREATE_GIFT_CARD:
  //       return {
  //         ...state,
  //         isFetching: false,
  //         giftCardData: action.payload
  //       };
  //     default:
  //       return state;
  //   }
  return {
    ...state,
    isFetching: false,
    giftCardData: "Hello World"
  };
};

export default authReducer;
