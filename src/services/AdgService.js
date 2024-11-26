import { myAxios } from "./helper";

// add Adg  /create
// http://localhost:8082/adg/create?regionId=2
export const saveAdg = (adg) => {
  return myAxios
    .post(`adg/create?regionId=${adg.regionId}`, {
      name: adg.name,
    })
    .then((response) => {
      return response.data;
    });
};

// Update Adg
// http://localhost:8082/adg/update/2?regionId=3
export const updateAdgs = (adgId, adg) => {
  return myAxios
    .put(`adg/update/${adgId}?regionId=${adg.regionId}`, {
      name: adg.name,
    })
    .then((response) => {
      return response.data;
    });
};

// All Adgs  List

export const fetchAdgList = () => {
  return myAxios.get(`adg/all`).then((response) => {
    return response.data;
  });
};

// Get Adg By ID

export const getAdgById = (adgId) => {
  return myAxios.get(`adg/get/` + adgId).then((res) => {
    return res.data;
  });
};

// Delete Adg

export const deleteAdgById = (adgId) => {
  return myAxios.delete(`adg/delete/` + adgId).then((response) => {
    return response.data;
  });
};
