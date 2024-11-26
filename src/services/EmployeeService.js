import { myAxios } from "./helper";

// add Employee  /create
// http://localhost:8082/employee/create?staffCategoryId=1&genderId=1&departmentId=1&regionId=1&adgId=1&zoneId=1&circleId=1&divisionId=1&employeeGroupId=1&designationId=1&postHeldId=1&cadreId=1&specialisationId=1&reservationClasificationId=1&stationId=1&employeeStatusId=1&payScaleId=1
// export const saveEmployee = (employee) => {
//   return myAxios
//     .post(
//       `employee/create?staffCategoryId=${employee}&genderId=${employee.genderId}&departmentId=${employee.departmentId}&regionId=${employee.regionId}&adgId=${employee.adgId}&zoneId=${employee.zoneId}&circleId=${employee.circleId}&divisionId=${employee.divisionId}&employeeGroupId=${employee.employeeGroupId}&designationId=${employee.designationId}&postHeldId=${employee.postHeldId}&cadreId=${employee.cadreId}&specialisationId=${employee.specialisationId}&reservationClasificationId=${employee.reservationClasificationId}&stationId=${employee.stationId}&employeeStatusId=${employee.employeeStatusId}&payScaleId=${employee.payScaleId}`,
//       {
//         firstName: employee.firstName,
//         middleName: employee.middleName,
//         lastName: employee.lastName,
//         dateofBirth: employee.dateofBirth,
//         father_HusbandName: employee.father_HusbandName,
//         employeeCode: employee.employeeCode,
//         currentOffice: employee.currentOffice,
//         reportingOffice: employee.reportingOffice,
//         doPTBatch: employee.doPTBatch,
//         dateOfJoiningCurrentOffice: employee.dateOfJoiningCurrentOffice,
//         referenceToOrderOfPosting: employee.referenceToOrderOfPosting,
//         additionalCharge: employee.additionalCharge,
//         additionalDuty: employee.additionalDuty,
//       }
//     )
//     .then((response) => {
//       return response.data;
//     });
// };

export const saveEmployee = (employee) => {
  const queryParams = `staffCategoryId=${employee.staffCategoryId}&genderId=${employee.genderId}&departmentId=${employee.departmentId}&regionId=${employee.regionId}&adgId=${employee.adgId}&zoneId=${employee.zoneId}&circleId=${employee.circleId}&divisionId=${employee.divisionId}&employeeGroupId=${employee.employeeGroupId}&designationId=${employee.designationId}&postHeldId=${employee.postHeldId}&cadreId=${employee.cadreId}&specialisationId=${employee.specialisationId}&reservationClasificationId=${employee.reservationClasificationId}&stationId=${employee.stationId}&employeeStatusId=${employee.employeeStatusId}&payScaleId=${employee.payScaleId}`;

  return myAxios
    .post(`employee/create?${queryParams}`, {
      firstName: employee.firstName,
      middleName: employee.middleName,
      lastName: employee.lastName,
      dateofBirth: employee.dateofBirth,
      father_HusbandName: employee.father_HusbandName,
      employeeCode: employee.employeeCode,
      currentOffice: employee.currentOffice,
      reportingOffice: employee.reportingOffice,
      doPTBatch: employee.doPTBatch,
      dateOfJoiningCurrentOffice: employee.dateOfJoiningCurrentOffice,
      referenceToOrderOfPosting: employee.referenceToOrderOfPosting,
      additionalCharge: employee.additionalCharge,
      additionalDuty: employee.additionalDuty,
    })
    .then((response) => {
      return response.data;
    });
};

// Update Employee
// http://localhost:8082/employee/update/1?staffCategoryId=2&genderId=2&departmentId=2&regionId=2&adgId=2&zoneId=2&circleId=2&divisionId=2&employeeGroupId=2&designationId=2&postHeldId=2&cadreId=2&specialisationId=2&reservationClasificationId=2&stationId=2&employeeStatusId=2&payScaleId=2
export const updateEmployees = (employeeId, employee) => {
  return myAxios
    .put(`employee/update/${employeeId}`, {
      firstName: employee.firstName,
      middleName: employee.middleName,
      lastName: employee.lastName,
      dateofBirth: employee.dateofBirth,
      father_HusbandName: employee.father_HusbandName,
      employeeCode: employee.employeeCode,
      currentOffice: employee.currentOffice,
      reportingOffice: employee.reportingOffice,
      doPTBatch: employee.doPTBatch,
      dateOfJoiningCurrentOffice: employee.dateOfJoiningCurrentOffice,
      referenceToOrderOfPosting: employee.referenceToOrderOfPosting,
      additionalCharge: employee.additionalCharge,
      additionalDuty: employee.additionalDuty,
    })
    .then((response) => {
      return response.data;
    });
};

// All Employees  List

export const fetchEmployeeList = () => {
  return myAxios.get(`employee/all`).then((response) => {
    return response.data;
  });
};

// Get Employee By ID

export const getEmployeeById = (employeeId) => {
  return myAxios.get(`employee/get/` + employeeId).then((res) => {
    return res.data;
  });
};

// Delete Employee

export const deleteEmployeeById = (employeeId) => {
  return myAxios.delete(`employee/delete/` + employeeId).then((response) => {
    return response.data;
  });
};
