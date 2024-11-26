import React, { useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { saveState } from "../../services/StateService";
const CreateState = () => {
  const [state, setState] = useState({
    name: "",
    aboutState: "",
    totalProjects: "",
    totalProjectsCompleted: "",
    totalOffices: "",
    stateCode: "",
    path: "",
  });

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setState({ ...state, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    saveState(state)
      .then((data) => {
        navigate("/state");
      })
      .catch((error) => {
        console.log("Failed to Save State. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setState({
      name: "",
      aboutState: "",
      totalProjects: "",
      totalProjectsCompleted: "",
      totalOffices: "",
      stateCode: "",
      path: "",
    });
  };

  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3> Create State</h3>
            </i>
          </div>
          <form action="" className="border border-secondary p-3 rounded">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "name")}
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
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                About State
                </label>
                <input
                  onChange={(e) => fieldChange(e, "aboutState")}
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
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                Total Projects
                </label>
                <input
                  onChange={(e) => fieldChange(e, "totalProjects")}
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
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                Total Projects Completed
                </label>
                <input
                  onChange={(e) => fieldChange(e, "totalProjectsCompleted")}
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
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                Total Offices
                </label>
                <input
                  onChange={(e) => fieldChange(e, "totalOffices")}
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
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                State Code
                </label>
                <input
                  onChange={(e) => fieldChange(e, "stateCode")}
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
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Path
                </label>
                <input
                  onChange={(e) => fieldChange(e, "path")}
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

export default CreateState;
