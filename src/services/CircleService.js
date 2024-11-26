import { myAxios } from "./helper";

// add Circle  /create
// http://localhost:8082/circle/create?zoneId=2

export const saveCircle = (circle) => {
  return myAxios
    .post(`circle/create?zoneId=${circle.zoneId}`, {
      name: circle.name,
    })
    .then((response) => {
      return response.data;
    });
};

// Update Circle
// http://localhost:8082/circle/update/1?zoneId=1
export const updateCircles = (circleId, circle) => {
  return myAxios
    .put(`circle/update/${circleId}?zoneId=${circle.zoneId}`, {
      name: circle.name,
    })
    .then((response) => {
      return response.data;
    });
};

// All Circles  List

export const fetchCircleList = () => {
  return myAxios.get(`circle/all`).then((response) => {
    return response.data;
  });
};

// Get Circle By ID

export const getCircleById = (circleId) => {
  return myAxios.get(`circle/` + circleId).then((res) => {
    return res.data;
  });
};

// Delete Circle

export const deleteCircleById = (circleId) => {
  return myAxios.delete(`circle/` + circleId).then((response) => {
    return response.data;
  });
};
