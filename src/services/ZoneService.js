import { myAxios } from "./helper";

// add Zone  /create
// http://localhost:8082/zone/create?adgId=2
export const saveZone = (zone) => {
  return myAxios
    .post(`zone/create?adgId=${zone.adgId}`, {
      name: zone.name,
    })
    .then((response) => {
      return response.data;
    });
};

// Update Zone
// http://localhost:8082/zone/update/1?adgId=1
export const updateZones = (zoneId, zone) => {
  return myAxios
    .put(`zone/update/${zoneId}?adgId=${zone.adgId}`, {
      name: zone.name,
    })
    .then((response) => {
      return response.data;
    });
};

// All Zones  List

export const fetchZoneList = () => {
  return myAxios.get(`zone/all`).then((response) => {
    return response.data;
  });
};

// Get Zone By ID

export const getZoneById = (zoneId) => {
  return myAxios.get(`zone/get/` + zoneId).then((res) => {
    return res.data;
  });
};

// Delete Zone

export const deleteZoneById = (zoneId) => {
  return myAxios.delete(`zone/delete/` + zoneId).then((response) => {
    return response.data;
  });
};
