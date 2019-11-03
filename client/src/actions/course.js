import axios from 'axios';

import {
  UPDATE_COURSE,
  ADD_COURSE,
  COURSE_FAIL,
  GET_COURSE,
  GET_COURSES,
  COURSE_ERROR,
  GET_LINK,
  ADD_LINK,
  LINK_ERROR,
  GET_COURSE_SPECIFIC,
  GET_SHOWCASE,
  SHOWCASE_ERROR,
  GET_COURSEC,
  GET_COURSED,
  ADD_SHOW,
  SHOW_FAIL,
  DELETE_COURSE,
  UPDATE_FAIL,
  UPDATE_SHOW
} from './types';
import { setAlert } from './alert';

//get all courses
export const getCourses = () => async dispatch => {
  const res = await axios.get('/api/courses');
  let { data, status, message } = res.data;
  if (status === 200) {
    dispatch({
      type: GET_COURSES,
      payload: data
    });
  } else {
    dispatch({
      type: GET_COURSES,
      payload: { msg: message, status: status }
    });
  }
};

//get the courses from the same school
export const getCoursesBySchool = school => async dispatch => {
  const res = await axios.get(`/api/courses/by/${school}`);
  let { message, data, status } = res.data;
  if (status === 200)
    dispatch({
      type: GET_COURSES,
      payload: data
    });
  else
    dispatch({
      type: GET_COURSES,
      payload: { message: message, status: status }
    });
};

//get the showcase from the same school
export const getShowcaseBySchool = school => async dispatch => {
  const res = await axios.get(`/api/showcases/by/${school}`);
  let { message, data, status } = res.data;
  if (status === 200)
    dispatch({
      type: GET_SHOWCASE,
      payload: data
    });
  else
    dispatch({
      type: SHOWCASE_ERROR,
      payload: { message: message, status: status }
    });
};

//get the showcase from the same school
export const getShowcaseByIdB = (school, idB) => async dispatch => {
  const res = await axios.get(`/api/showcases/by/${school}/${idB}`);
  let { message, data, status } = res.data;
  if (status === 200)
    dispatch({
      type: GET_COURSE_SPECIFIC,
      payload: data
    });
  else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};

//Delete the showcase
export const deleteShowA = idA => async dispatch => {
  const res = await axios.delete(`/api/showcases/${idA}`);
  let { message, data, status } = res.data;
  if (status === 200) {
    dispatch({
      type: DELETE_COURSE,
      payload: data
    });
    dispatch(setAlert('Delete course', 'success'));
  } else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};

//Delete the showcase B
export const deleteShowB = (idA, idB) => async dispatch => {
  const res = await axios.delete(`/api/showcases/${idA}/${idB}`);
  let { message, data, status } = res.data;
  if (status === 200) {
    dispatch({
      type: DELETE_COURSE,
      payload: data
    });
    dispatch(setAlert('Delete course', 'success'));
  } else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};

//Delete the showcase C
export const deleteShowC = (idA, idB, idC) => async dispatch => {
  const res = await axios.delete(`/api/showcases/${idA}/${idB}/${idC}`);
  let { message, data, status } = res.data;
  if (status === 200) {
    dispatch({
      type: DELETE_COURSE,
      payload: data
    });
    dispatch(setAlert('Delete course', 'success'));
  } else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};

//Delete the showcase D
export const deleteShowD = (idA, idB, idC, idD) => async dispatch => {
  const res = await axios.delete(`/api/showcases/${idA}/${idB}/${idC}/${idD}`);
  let { message, data, status } = res.data;
  if (status === 200) {
    dispatch({
      type: DELETE_COURSE,
      payload: data
    });
    dispatch(setAlert('Delete course', 'success'));
  } else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};

//Delete the Link
export const deleteShowLink = (
  idA,
  idB,
  idC,
  idD,
  idLink
) => async dispatch => {
  const res = await axios.delete(
    `/api/showcases/${idA}/${idB}/${idC}/${idD}/${idLink}`
  );
  let { message, data, status } = res.data;
  if (status === 200) {
    dispatch({
      type: DELETE_COURSE,
      payload: data
    });
    dispatch(setAlert('Delete Link in Course', 'success'));
  } else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};

//get the showcase from the same school
export const getShowcaseByIdC = (school, idB, idC) => async dispatch => {
  const res = await axios.get(`/api/showcases/by/${school}/${idB}/${idC}`);
  let { message, data, status } = res.data;
  if (status === 200)
    dispatch({
      type: GET_COURSEC,
      payload: data
    });
  else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};

//get course
export const getCourse = id => async dispatch => {
  const res = await axios.get(`/api/courses/${id}`);
  let { message, data, status } = res.data;
  if (status === 200)
    dispatch({
      type: GET_COURSE,
      payload: data
    });
  else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};

//get the showcase from the same school
export const getSpecificShowcaseByIdD = (
  school,
  idB,
  idC,
  idD
) => async dispatch => {
  const res = await axios.get(
    `/api/showcases/specific/${school}/${idB}/${idC}/${idD}`
  );
  let { message, data, status } = res.data;
  if (status === 200)
    dispatch({
      type: GET_COURSED,
      payload: data
    });
  else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};

//get the showcase from the same school
export const getShowcaseByIdD = (school, idB, idC, idD) => async dispatch => {
  const res = await axios.get(
    `/api/showcases/by/${school}/${idB}/${idC}/${idD}`
  );
  let { message, data, status } = res.data;
  if (status === 200)
    dispatch({
      type: GET_COURSED,
      payload: data
    });
  else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};

//get specific course
export const specificCourse = id => async dispatch => {
  const res = await axios.get(`/api/courses/specific/${id}`);
  let { message, data, status } = res.data;
  if (status === 200)
    dispatch({
      type: GET_COURSE_SPECIFIC,
      payload: data
    });
  else
    dispatch({
      type: COURSE_ERROR,
      payload: { message: message, status: status }
    });
};
//get link from course
//get course
export const getLink = (id, link) => async dispatch => {
  const res = await axios.get(`/api/courses/${id}/${link}`);
  let { message, data, status } = res.data;
  if (status === 200) {
    dispatch({
      type: GET_LINK,
      payload: data
    });
  } else {
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: message, status: status }
    });
  }
};

//Add Course
export const addShowA = ({ nameOfCourseA, titleA }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    nameOfCourseA,
    titleA
  });

  const res = await axios.post('/api/showcases/add', body, config);
  let { errors, data, status, message } = res.data;
  if (status === 200) {
    dispatch({
      type: ADD_SHOW,
      payload: data
    });
    dispatch(setAlert('course added', 'success'));
  } else if (status === 400)
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
  else
    dispatch({
      type: SHOW_FAIL,
      payload: { msg: message, status: 500 }
    });
};

//Add Course
export const addShowB = ({
  school,
  nameB,
  imgB,
  indexLink,
  price,
  lUpdate,
  title,
  titleB,
  titleC,
  author,
  owner
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    school,
    nameB,
    indexLink,
    imgB,
    price,
    lUpdate,
    title,
    titleB,
    titleC,
    author,
    owner
  });
  const res = await axios.post('/api/showcases/addShowB', body, config);
  let { errors, data, status, message } = res.data;
  if (status === 200) {
    dispatch({
      type: ADD_SHOW,
      payload: data
    });
    dispatch(setAlert('course added', 'success'));
  } else if (status === 400)
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
  else
    dispatch({
      type: SHOW_FAIL,
      payload: { msg: message, status: 500 }
    });
};

export const updateShowB = ({
  school,
  nameB,
  imgB,
  indexLink,
  price,
  lUpdate,
  title,
  titleB,
  titleC,
  author,
  owner,
  idB
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    school,
    nameB,
    indexLink,
    imgB,
    price,
    lUpdate,
    title,
    titleB,
    titleC,
    author,
    owner,
    idB
  });
  const res = await axios.put('/api/showcases/updateShowB', body, config);
  let { errors, data, status, message } = res.data;
  if (status === 200) {
    dispatch({
      type: UPDATE_SHOW,
      payload: data
    });
    dispatch(setAlert('course update', 'success'));
  } else if (status === 400)
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
  else
    dispatch({
      type: UPDATE_FAIL,
      payload: { msg: message, status: 500 }
    });
};

//Add Link to Course
export const addLinkToShow = ({
  school,
  idB,
  idC,
  idD,
  name,
  type,
  link,
  indexLink,
  subject
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    school,
    idB,
    idC,
    idD,
    name,
    type,
    link,
    indexLink,
    subject
  });
  const res = await axios.post('/api/showcases/addLinkToShow', body, config);
  let { errors, data, status, message } = res.data;
  if (status === 200) {
    dispatch({
      type: ADD_SHOW,
      payload: data
    });
    dispatch(setAlert('course added', 'success'));
  } else if (status === 400)
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
  else
    dispatch({
      type: SHOW_FAIL,
      payload: { msg: message, status: 500 }
    });
};

//Add Course
export const addShowD = ({
  school,
  nameD,
  imgD,
  indexLink,
  details,
  idB,
  idC
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    school,
    nameD,
    imgD,
    indexLink,
    details,
    idB,
    idC
  });
  const res = await axios.post('/api/showcases/addShowD', body, config);
  let { errors, data, status, message } = res.data;
  if (status === 200) {
    dispatch({
      type: ADD_SHOW,
      payload: data
    });
    dispatch(setAlert('course added', 'success'));
  } else if (status === 400)
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
  else
    dispatch({
      type: SHOW_FAIL,
      payload: { msg: message, status: 500 }
    });
};

//Add Course
export const addShowC = ({
  school,
  nameC,
  imgC,
  indexLink,
  idB
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    school,
    nameC,
    imgC,
    indexLink,
    idB
  });
  const res = await axios.post('/api/showcases/addShowC', body, config);
  let { errors, data, status, message } = res.data;
  if (status === 200) {
    dispatch({
      type: ADD_SHOW,
      payload: data
    });
    dispatch(setAlert('course added', 'success'));
  } else if (status === 400)
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
  else
    dispatch({
      type: SHOW_FAIL,
      payload: { msg: message, status: 500 }
    });
};

//Add Course
export const addCourse = ({
  nameOfCourse,
  school,
  grade,
  group,
  lUpdate,
  author,
  fLine,
  price,
  img,
  owner
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    nameOfCourse,
    school,
    grade,
    group,
    lUpdate,
    author,
    fLine,
    price,
    img,
    owner
  });

  const res = await axios.post('/api/courses/addCourse', body, config);
  let { errors, data, status, message } = res.data;
  if (status === 200) {
    dispatch({
      type: ADD_COURSE,
      payload: data
    });
    dispatch(setAlert('course added', 'success'));
  } else if (status === 400)
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
  else
    dispatch({
      type: COURSE_FAIL,
      payload: { msg: message, status: 500 }
    });
};

//Update Course
export const updateCourse = ({
  id,
  nameOfCourse,
  school,
  grade,
  group,
  lUpdate,
  author,
  fLine,
  price,
  img,
  owner
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    id,
    nameOfCourse,
    school,
    grade,
    group,
    lUpdate,
    author,
    fLine,
    price,
    img,
    owner
  });

  const res = await axios.put('/api/courses/updateCourse', body, config);
  let { errors, data, status, message } = res.data;
  if (status === 200) {
    dispatch({
      type: UPDATE_COURSE,
      payload: data
    });
    dispatch(setAlert('course update', 'success'));
  } else if (status === 400)
    errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
  else
    dispatch({
      type: COURSE_FAIL,
      payload: { msg: message, status: 500 }
    });
};

//Add Link to Course
export const addLink = ({
  courseId,
  name,
  type,
  link,
  indexLink,
  subject
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ type, link, name, indexLink, subject });

  const res = await axios.post(`/api/courses/link/${courseId}`, body, config);
  let { message, data, status } = res.data;
  if (status === 200) {
    dispatch(setAlert('Link Add', 'success'));
    dispatch({
      type: ADD_LINK,
      payload: data
    });
  } else
    dispatch({
      type: LINK_ERROR,
      payload: { msg: message, status: status }
    });
};
