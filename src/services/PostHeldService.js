import { myAxios } from "./helper";

// add PostHeld  /create
// http://localhost:8082/postHeld/create?staffCategoryId=1
export const savePostHeld = (postHeld) => {
  return myAxios.post(`postHeld/create?staffCategoryId=${postHeld.staffCategoryId}`, {
    title: postHeld.title,
  }).then((response) => {
    return response.data;
  });
};

// Update PostHeld
// http://localhost:8082/postHeld/update/1?staffCategoryId=1

export const updatePostHelds = (postHeldId, postHeld) => {
  return myAxios.put(`postHeld/update/${postHeldId}?staffCategoryId=${postHeld.staffCategoryId}`, {
    title: postHeld.title,
  }).then((response) => {
    return response.data;
  });
};

// All PostHelds  List

export const fetchPostHeldList = () => {
  return myAxios.get(`postHeld/`).then((response) => {
    return response.data;
  });
};

// Get PostHeld By ID

export const getPostHeldById = (postHeldId) => {
  return myAxios.get(`postHeld/` + postHeldId).then((res) => {
    return res.data;
  });
};

// Delete PostHeld

export const deletePostHeldById = (postHeldId) => {
  return myAxios.delete(`postHeld/` + postHeldId).then((response) => {
    return response.data;
  });
};
