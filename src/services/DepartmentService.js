import { myAxios } from "./helper";

// add Department  /create

export const saveDepartment = (department) => {
  return myAxios.post(`department/create`, department).then((response) => {
    return response.data;
  });
};

// Update Department

export const updateDepartments = (departmentId, department) => {
  return myAxios.put(`department/update/${departmentId}`, department).then((response) => {
    return response.data;
  });
};

// All Departments  List

export const fetchDepartmentList = () => {
  return myAxios.get(`department/`).then((response) => {
    return response.data;
  });
};

// Get Department By ID

export const getDepartmentById = (departmentId) => {
  return myAxios.get(`department/` + departmentId).then((res) => {
    return res.data;
  });
};

// Delete Department

export const deleteDepartmentById = (departmentId) => {
  return myAxios.delete(`department/` + departmentId).then((response) => {
    return response.data;
  });
};
