import { myAxios } from "./helper";

// add EmployeeGroup  /create

export const saveEmployeeGroup = (employeeGroup) => {
  return myAxios.post(`employeeGroup/create`, employeeGroup).then((response) => {
    return response.data;
  });
};

// Update EmployeeGroup

export const updateEmployeeGroups = (employeeGroupId, employeeGroup) => {
  return myAxios.put(`employeeGroup/update/${employeeGroupId}`, employeeGroup).then((response) => {
    return response.data;
  });
};

// All EmployeeGroups  List

export const fetchEmployeeGroupList = () => {
  return myAxios.get(`employeeGroup/`).then((response) => {
    return response.data;
  });
};

// Get EmployeeGroup By ID

export const getEmployeeGroupById = (employeeGroupId) => {
  return myAxios.get(`employeeGroup/` + employeeGroupId).then((res) => {
    return res.data;
  });
};

// Delete EmployeeGroup

export const deleteEmployeeGroupById = (employeeGroupId) => {
  return myAxios.delete(`employeeGroup/` + employeeGroupId).then((response) => {
    return response.data;
  });
};
