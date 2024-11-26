import { myAxios } from "./helper";

// add Specialisation  /create

export const saveSpecialisation = (specialisation) => {
  return myAxios.post(`specialisation/create`, specialisation).then((response) => {
    return response.data;
  });
};

// Update Specialisation

export const updateSpecialisations = (specialisationId, specialisation) => {
  return myAxios.put(`specialisation/update/${specialisationId}`, specialisation).then((response) => {
    return response.data;
  });
};

// All Specialisations  List

export const fetchSpecialisationList = () => {
  return myAxios.get(`specialisation/`).then((response) => {
    return response.data;
  });
};

// Get Specialisation By ID

export const getSpecialisationById = (specialisationId) => {
  return myAxios.get(`specialisation/` + specialisationId).then((res) => {
    return res.data;
  });
};

// Delete Specialisation

export const deleteSpecialisationById = (specialisationId) => {
  return myAxios.delete(`specialisation/` + specialisationId).then((response) => {
    return response.data;
  });
};
