import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { fetchStateList } from "../../services/StateService";
import { saveStation } from "../../services/StationService";
const CreateStation = () => {
  const [station, setStation] = useState({
    name: "",
    stateId: "",
  });

  const [state, setState] = useState([]);

  useEffect(() => {
    fetchStateList()
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Adg details:", error);
      });
  }, []);

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setStation({ ...station, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    saveStation(station)
      .then((data) => {
        navigate("/station");
      })
      .catch((error) => {
        console.log("Failed to Save Station. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setStation({
      title: "",
      level: "",
      staffCategoryId: "",
    });
  };
  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Create Station</h3>
            </i>
          </div>
          <form action="" className="border border-secondary p-3 rounded">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "name")}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="cusName" className="form-label">
                  State
                </label>
                <select
                  onChange={(e) => fieldChange(e, "stateId")}
                  className="form-control"
                  id="state"
                  value={state.stateId}
                >
                  <option value="">Select State</option>
                  {state.map((stateItem) => (
                    <option key={stateItem.stateId} value={stateItem.stateId}>
                      {stateItem.name}
                    </option>
                  ))}
                </select>
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


export default CreateStation