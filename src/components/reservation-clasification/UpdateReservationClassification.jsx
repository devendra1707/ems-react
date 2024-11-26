import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { getReservationClasificationById, updateReservationClasifications } from "../../services/ReservationClasificationService";
const UpdateReservationClassification = () => {
  const { reservationClasificationId } = useParams();

  const navigate = useNavigate();

  const [reservationClassification, setReservationClassification] = useState({
    title: "",
  });

  const fieldChange = (event, property) => {
    // console.log("Changing ...");
    setReservationClassification({ ...reservationClassification, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form Submitted ...");

    try {
      await updateReservationClasifications(reservationClasificationId, {
        title: reservationClassification.title,
      });
      // alert("ReservationClassification is Updated Successfully");
      navigate("/reservation-clasification");
    } catch (error) {
      console.log("Failed to Update ReservationClassification. Please try again later.");
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/reservation-clasification");
  };

  useEffect(() => {
    getReservationClasificationById(reservationClasificationId)
      .then((data) => {
        setReservationClassification(data);
        // console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Failed to fetch ReservationClassification details:", error);
      });
  }, [reservationClasificationId]);
  return (
    <Base>
    {/* {JSON.stringify(reservationClasificationId)} */}
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Update Reservation Classification</h3>
            </i>
          </div>
          <form action="" className="border border-secondary p-3 rounded">
          <div className="row">
              <div className="col-md-12 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Title
                </label>
                <input
                  onChange={(e) => fieldChange(e, "title")}
                  value={reservationClassification.title}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
                {/* {errors.cusName && (
                  <div className="text-danger">{errors.cusName}</div>
                )} */}
              </div>
            </div>
            <div className="card-body text-center">
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-secondary"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </main>
    </Base>
  );
};

export default UpdateReservationClassification;
