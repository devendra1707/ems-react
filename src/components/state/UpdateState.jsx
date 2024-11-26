import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { getStateById, updateStates } from "../../services/StateService";
const UpdateState = () => {
  const { stateId } = useParams();

  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    aboutState: "",
    totalProjects: "",
    totalProjectsCompleted: "",
    totalOffices: "",
    stateCode: "",
    path: "",
  });

  const fieldChange = (event, property) => {
    // console.log("Changing ...");
    setState({ ...state, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form Submitted ...");

    try {
      await updateStates(stateId, {
        name: state.name,
        aboutState: state.aboutState,
        totalProjects: state.totalProjects,
        totalProjectsCompleted: state.totalProjectsCompleted,
        totalOffices: state.totalOffices,
        stateCode: state.stateCode,
        path: state.path,
      });
      // alert("State is Updated Successfully");
      navigate("/state");
    } catch (error) {
      console.log("Failed to Update State. Please try again later.");
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/state");
  };

  useEffect(() => {
    getStateById(stateId)
      .then((data) => {
        setState(data);
        // console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Failed to fetch State details:", error);
      });
  }, [stateId]);

  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Update State</h3>
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
                  value={state.name}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
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
                  value={state.aboutState}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
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
                  value={state.totalProjects}
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
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Total Projects Completed
                </label>
                <input
                  onChange={(e) => fieldChange(e, "totalProjectsCompleted")}
                  value={state.totalProjectsCompleted}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
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
                  value={state.totalOffices}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
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
                  value={state.stateCode}
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
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Path
                </label>
                <input
                  onChange={(e) => fieldChange(e, "path")}
                  value={state.path}
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

export default UpdateState;
