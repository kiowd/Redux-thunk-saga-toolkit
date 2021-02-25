import axios from "axios";

const initialValue = {
  loading: true,
  users: [],
  error: ""
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ""
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      };

    default:
      return state;
  }
};

export const fetchUsers = () => {
  return function(dispatch){
    dispatch(fetchUsersRequest);
      axios.get('https://randomuser.me/api/')
      .then(res => {
       // console.log (res);
        const users = res.data.results[0].name;
       // console.log(users);
        dispatch(fetchUsersSuccess(users))

      })
      .catch(error => {

        dispatch(fetchUsersFailure(error.message))
      })

}
}


