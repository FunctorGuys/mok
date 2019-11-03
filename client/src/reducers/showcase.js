import {
  GET_SHOWCASE,
  SHOWCASE_ERROR,
  GET_COURSE_SPECIFIC,
  GET_COURSEC,
  GET_COURSED,
  COURSE_ERROR,
  ADD_SHOW,
  SHOW_FAIL,
  GET_SHOWA,
  DELETE_COURSE,
  UPDATE_FAIL,
  UPDATE_SHOW
} from './../actions/types';

const initialState = {
  course: null,
  loading: true,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SHOWA:
      return {
        ...state,
        courseA: payload,
        error: null,
        loading: false
      };
    case UPDATE_SHOW:
    case ADD_SHOW:
    case DELETE_COURSE:
      return {
        ...state,
        courseA: payload,
        loading: false
      };
    case UPDATE_FAIL:
    case SHOW_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_COURSE_SPECIFIC:
    case GET_COURSEC:
    case GET_COURSED:
    case GET_SHOWCASE:
      return {
        courseA: payload,
        error: null,
        loading: false
      };
    case COURSE_ERROR:
    case SHOWCASE_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
}
