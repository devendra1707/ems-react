import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { getCadreById, updateCadres } from "../../services/CadreService";
const UpdateCadre = () => {
  const { cadreId } = useParams();

  const navigate = useNavigate();

  const [cadre, setCadre] = useState({
    title: "",
  });

  const fieldChange = (event, property) => {
    // console.log("Changing ...");
    setCadre({ ...cadre, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form Submitted ...");

    try {
      await updateCadres(cadreId, {
        title: cadre.title,
      });
      // alert("Cadre is Updated Successfully");
      navigate("/cadre");
    } catch (error) {
      console.log("Failed to Update Cadre. Please try again later.");
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/cadre");
  };

  useEffect(() => {
    getCadreById(cadreId)
      .then((data) => {
        setCadre(data);
        // console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Failed to fetch Cadre details:", error);
      });
  }, [cadreId]);

  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Update Cadre</h3>
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
                  value={cadre.title}
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
  )
}

export default UpdateCadre