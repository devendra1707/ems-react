import React, { useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { saveGender } from "../../services/GenderService";

const CreateGender = () => {
  const [gender, setGender] = useState({
    title: "",
  });

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setGender({ ...gender, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    saveGender(gender)
      .then((data) => {
        navigate("/gender");
      })
      .catch((error) => {
        console.log("Failed to Save Gender. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setGender({
      title: "",
    });
  };
  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Create Gender</h3>
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

export default CreateGender;
