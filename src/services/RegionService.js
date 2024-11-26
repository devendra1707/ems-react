import { myAxios } from "./helper";

// add Region  /create

export const saveRegion = (region) => {
  return myAxios.post(`region/create`, region).then((response) => {
    return response.data;
  });
};

// Update Region

export const updateRegions = (regionId, region) => {
  return myAxios.put(`region/update/${regionId}`, region).then((response) => {
    return response.data;
  });
};

// All Regions  List

export const fetchRegionList = () => {
  return myAxios.get(`region/all`).then((response) => {
    return response.data;
  });
};

// Get Region By ID

export const getRegionById = (regionId) => {
  return myAxios.get(`region/get/` + regionId).then((res) => {
    return res.data;
  });
};

// Delete Region

export const deleteRegionById = (regionId) => {
  return myAxios.delete(`region/delete/` + regionId).then((response) => {
    return response.data;
  });
};
