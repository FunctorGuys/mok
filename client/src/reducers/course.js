import {
  ADD_COURSE,
  COURSE_FAIL,
  GET_COURSES,
  GET_COURSE,
  COURSE_ERROR,
  GET_LINK,
  LINK_ERROR,
  ADD_LINK,
  GET_COURSE_SPECIFIC,
  UPDATE_COURSE
} from './../actions/types';

const initialState = {
  courses: [],
  course: null,
  loading: true,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LINK:
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
        error: null,
        course: null,
        loading: false
      };
    case GET_COURSE:
      return {
        ...state,
        course: payload,
        error: null,
        loading: false
      };
    case GET_COURSE_SPECIFIC:
      return {
        ...state,
        course: payload,
        error: true,
        loading: false
      };
    case COURSE_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case UPDATE_COURSE:
    case ADD_COURSE:
      return {
        ...state,
        courses: [payload, ...state.courses],

        loading: false
      };
    case ADD_LINK:
      return {
        ...state,
        course: { ...state.course, links: payload },
        loading: false
      };
    case LINK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case COURSE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
