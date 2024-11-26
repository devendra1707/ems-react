import { myAxios } from "./helper";

// add Cadre  /create

export const saveCadre = (cadre) => {
  return myAxios.post(`cadre/create`, cadre).then((response) => {
    return response.data;
  });
};

// Update Cadre

export const updateCadres = (cadreId, cadre) => {
  return myAxios.put(`cadre/update/${cadreId}`, cadre).then((response) => {
    return response.data;
  });
};

// All Cadres  List

export const fetchCadreList = () => {
  return myAxios.get(`cadre/`).then((response) => {
    return response.data;
  });
};

// Get Cadre By ID

export const getCadreById = (cadreId) => {
  return myAxios.get(`cadre/` + cadreId).then((res) => {
    return res.data;
  });
};

// Delete Cadre

export const deleteCadreById = (cadreId) => {
  return myAxios.delete(`cadre/` + cadreId).then((response) => {
    return response.data;
  });
};
