import { myAxios } from "./helper";

// add Gender  /create

export const saveGender = (gender) => {
  return myAxios.post(`gender/create`, gender).then((response) => {
    return response.data;
  });
};

// Update Gender

export const updateGenders = (genderId, gender) => {
  return myAxios.put(`gender/${genderId}`, gender).then((response) => {
    return response.data;
  });
};

// All Genders  List

export const fetchGenderList = () => {
  return myAxios.get(`gender/all`).then((response) => {
    return response.data;
  });
};

// Get Gender By ID

export const getGenderById = (genderId) => {
  return myAxios.get(`gender/` + genderId).then((res) => {
    return res.data;
  });
};

// Delete Gender

export const deleteGenderById = (genderId) => {
  return myAxios.delete(`gender/` + genderId).then((response) => {
    return response.data;
  });
};
