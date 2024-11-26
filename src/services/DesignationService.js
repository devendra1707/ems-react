import { myAxios } from "./helper";

// add Designation  /create
//  http://localhost:8082/designation/create?staffCategoryId=3
export const saveDesignation = (designation) => {
  return myAxios
    .post(`designation/create?staffCategoryId=${designation.staffCategoryId}`, {
      title: designation.title,
      level: designation.level,
    })
    .then((response) => {
      return response.data;
    });
};

// Update Designation
// http://localhost:8082/designation/update/52?staffCategoryId=2
export const updateDesignations = (designationId, designation) => {
  return myAxios
    .put(`designation/update/${designationId}?staffCategoryId=${designation.staffCategoryId}`, {
      title: designation.title,
      level: designation.level,
    })
    .then((response) => {
      return response.data;
    });
};

// All Designations  List

export const fetchDesignationList = () => {
  return myAxios.get(`designation/`).then((response) => {
    return response.data;
  });
};

// Get Designation By ID

export const getDesignationById = (designationId) => {
  return myAxios.get(`designation/` + designationId).then((res) => {
    return res.data;
  });
};

// Delete Designation

export const deleteDesignationById = (designationId) => {
  return myAxios.delete(`designation/` + designationId).then((response) => {
    return response.data;
  });
};
