import { myAxios } from "./helper";

// add State  /create

export const saveState = (state) => {
  return myAxios.post(`state/create`, state).then((response) => {
    return response.data;
  });
};

// Update State

export const updateStates = (stateId, state) => {
  return myAxios.put(`state/update/${stateId}`, state).then((response) => {
    return response.data;
  });
};

// All States  List

export const fetchStateList = () => {
  return myAxios.get(`state/all`).then((response) => {
    return response.data;
  });
};

// Get State By ID

export const getStateById = (stateId) => {
  return myAxios.get(`state/get/` + stateId).then((res) => {
    return res.data;
  });
};

// Delete State

export const deleteStateById = (stateId) => {
  return myAxios.delete(`state/delete/` + stateId).then((response) => {
    return response.data;
  });
};
