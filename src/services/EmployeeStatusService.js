import { myAxios } from "./helper";

// add EmployeeStatus  /create

export const saveEmployeeStatus = (employeeStatus) => {
  return myAxios.post(`employeeStatus/create`, employeeStatus).then((response) => {
    return response.data;
  });
};

// Update EmployeeStatus

export const updateEmployeeStatuss = (employeeStatusId, employeeStatus) => {
  return myAxios.put(`employeeStatus/update/${employeeStatusId}`, employeeStatus).then((response) => {
    return response.data;
  });
};

// All EmployeeStatuss  List

export const fetchEmployeeStatusList = () => {
  return myAxios.get(`employeeStatus/`).then((response) => {
    return response.data;
  });
};

// Get EmployeeStatus By ID

export const getEmployeeStatusById = (employeeStatusId) => {
  return myAxios.get(`employeeStatus/` + employeeStatusId).then((res) => {
    return res.data;
  });
};

// Delete EmployeeStatus

export const deleteEmployeeStatusById = (employeeStatusId) => {
  return myAxios.delete(`employeeStatus/` + employeeStatusId).then((response) => {
    return response.data;
  });
};
