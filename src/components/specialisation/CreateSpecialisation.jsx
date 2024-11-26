import React, { useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { saveSpecialisation } from "../../services/SpecialisationService";
const CreateSpecialisation = () => {
  const [specialisation, setSpecialisation] = useState({
    title: "",
  });

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setSpecialisation({ ...specialisation, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    saveSpecialisation(specialisation)
      .then((data) => {
        navigate("/specialisation");
      })
      .catch((error) => {
        console.log("Failed to Save Specialisation. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setSpecialisation({
      title: "",
    });
  };
  
  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Create Specialisation</h3>
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
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                  // value={customer.cusName}
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
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </main>
    </Base>
  );
};

export default CreateSpecialisation;
