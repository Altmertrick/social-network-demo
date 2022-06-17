import { profileAPI } from '../../api/api';

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  newPostText: 'Initial text',
  posts: [
    { id: '1', text: 'My first post', likes: 1 },
    { id: '2', text: "What's up, man, today...", likes: 12 },
    { id: '3', text: 'Jack of all trades master of none', likes: 13 },
    { id: '4', text: 'Lorem ipsum Ola ', likes: 16 },
  ],
  userProfileData: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };

    case ADD_POST:
      let post = {
        id: '11',
        likes: 99,
        text: state.newPostText,
      };

      return {
        ...state,
        posts: [...state.posts, post],
        newPostText: ' ',
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfileData: action.user,
      };

    default:
      return state;
  }
};

//Action Creators

export const updateNewPostTextAC = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

export const addPostAC = () => ({ type: ADD_POST });
//
export const setUserProfileAC = (user) => ({
  type: SET_USER_PROFILE,
  user,
});

//Thunk Creators
export const getProfileThC = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileData(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};

export default profileReducer;
