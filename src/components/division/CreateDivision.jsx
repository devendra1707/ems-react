import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { saveDivision } from "../../services/DivisionService";
import { fetchCircleList } from "../../services/CircleService";
const CreateDivision = () => {
  const [division, setDivision] = useState({
    name: "",
    circleId: "",
  });

  const [circle, setCircle] = useState([]);

  useEffect(() => {
    fetchCircleList()
      .then((data) => {
        setCircle(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Circle details:", error);
      });
  }, []);

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setDivision({ ...division, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    saveDivision(division)
      .then((data) => {
        navigate("/division");
      })
      .catch((error) => {
        console.log("Failed to Save Division. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setDivision({
      name: "",
      circleId: "",
    });
  };
  return (
    <Base>
      {/* {JSON.stringify(staffCategory)} */}
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Create Division</h3>
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
                 Circle
                </label>
                <select
                  onChange={(e) => fieldChange(e, "circleId")}
                  className="form-control"
                  id="circle"
                  value={division.circleId}
                >
                  <option value="">Select Circle</option>
                  {circle.map((circleItem) => (
                    <option
                      key={circleItem.circleId}
                      value={circleItem.circleId}
                    >
                      {circleItem.name}
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

export default CreateDivision;
