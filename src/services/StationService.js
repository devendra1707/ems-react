import { myAxios } from "./helper";

// add Station  /create
//  http://localhost:8082/station/create?stateId=2
export const saveStation = (station) => {
  return myAxios.post(`station/create?stateId=${station.stateId}`, {
    name: station.name,
  }).then((response) => {
    return response.data;
  });
};

// Update Station
// http://localhost:8082/station/update/1?stateId=1
export const updateStations = (stationId, station) => {
  return myAxios.put(`station/update/${stationId}?stateId=${station.stateId}`, {
    name: station.name,
  }).then((response) => {
    return response.data;
  });
};

// All Stations  List

export const fetchStationList = () => {
  return myAxios.get(`station/all`).then((response) => {
    return response.data;
  });
};

// Get Station By ID

export const getStationById = (stationId) => {
  return myAxios.get(`station/get/` + stationId).then((res) => {
    return res.data;
  });
};

// Delete Station

export const deleteStationById = (stationId) => {
  return myAxios.delete(`station/delete/` + stationId).then((response) => {
    return response.data;
  });
};
