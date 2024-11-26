import { myAxios } from "./helper";

// add StaffCategory  /create

export const saveStaffCategory = (staffCategory) => {
  return myAxios.post(`staffCategory/create`, staffCategory).then((response) => {
    return response.data;
  });
};

// Update StaffCategory

export const updateStaffCategorys = (staffCategoryId, staffCategory) => {
  return myAxios.put(`staffCategory/update/${staffCategoryId}`, staffCategory).then((response) => {
    return response.data;
  });
};

// All StaffCategorys  List

export const fetchStaffCategoryList = () => {
  return myAxios.get(`staffCategory/`).then((response) => {
    return response.data;
  });
};

// Get StaffCategory By ID

export const getStaffCategoryById = (staffCategoryId) => {
  return myAxios.get(`staffCategory/` + staffCategoryId).then((res) => {
    return res.data;
  });
};

// Delete StaffCategory

export const deleteStaffCategoryById = (staffCategoryId) => {
  return myAxios.delete(`staffCategory/` + staffCategoryId).then((response) => {
    return response.data;
  });
};
