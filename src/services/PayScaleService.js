import { myAxios } from "./helper";

// add PayScale  /create

export const savePayScale = (payScale) => {
  return myAxios.post(`payScale/create`, payScale).then((response) => {
    return response.data;
  });
};

// Update PayScale

export const updatePayScales = (payScaleId, payScale) => {
  return myAxios.put(`payScale/update/${payScaleId}`, payScale).then((response) => {
    return response.data;
  });
};

// All PayScales  List

export const fetchPayScaleList = () => {
  return myAxios.get(`payScale/`).then((response) => {
    return response.data;
  });
};

// Get PayScale By ID

export const getPayScaleById = (payScaleId) => {
  return myAxios.get(`payScale/` + payScaleId).then((res) => {
    return res.data;
  });
};

// Delete PayScale

export const deletePayScaleById = (payScaleId) => {
  return myAxios.delete(`payScale/` + payScaleId).then((response) => {
    return response.data;
  });
};
