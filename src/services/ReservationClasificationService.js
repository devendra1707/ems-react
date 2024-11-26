import { myAxios } from "./helper";

// add ReservationClasification  /create

export const saveReservationClasification = (reservationClasification) => {
  return myAxios.post(`reservationClasification/create`, reservationClasification).then((response) => {
    return response.data;
  });
};

// Update ReservationClasification

export const updateReservationClasifications = (reservationClasificationId, reservationClasification) => {
  return myAxios.put(`reservationClasification/update/${reservationClasificationId}`, reservationClasification).then((response) => {
    return response.data;
  });
};

// All ReservationClasifications  List

export const fetchReservationClasificationList = () => {
  return myAxios.get(`reservationClasification/`).then((response) => {
    return response.data;
  });
};

// Get ReservationClasification By ID

export const getReservationClasificationById = (reservationClasificationId) => {
  return myAxios.get(`reservationClasification/` + reservationClasificationId).then((res) => {
    return res.data;
  });
};

// Delete ReservationClasification

export const deleteReservationClasificationById = (reservationClasificationId) => {
  return myAxios.delete(`reservationClasification/` + reservationClasificationId).then((response) => {
    return response.data;
  });
};
