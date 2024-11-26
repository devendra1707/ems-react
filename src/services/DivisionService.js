import { myAxios } from "./helper";

// add Division  /create
// http://localhost:8082/division/create?circleId=1
export const saveDivision = (division) => {
  return myAxios
    .post(`division/create?circleId=${division.circleId}`, {
      name: division.name,
    })
    .then((response) => {
      return response.data;
    });
};

// Update Division
// http://localhost:8082/division/update/2?circleId=2
export const updateDivisions = (divisionId, division) => {
  return myAxios
    .put(`division/update/${divisionId}?circleId=${division.circleId}`, {
      name: division.name,
    })
    .then((response) => {
      return response.data;
    });
};

// All Divisions  List

export const fetchDivisionList = () => {
  return myAxios.get(`division/all`).then((response) => {
    return response.data;
  });
};

// Get Division By ID

export const getDivisionById = (divisionId) => {
  return myAxios.get(`division/get/` + divisionId).then((res) => {
    return res.data;
  });
};

// Delete Division

export const deleteDivisionById = (divisionId) => {
  return myAxios.delete(`division/delete/` + divisionId).then((response) => {
    return response.data;
  });
};
