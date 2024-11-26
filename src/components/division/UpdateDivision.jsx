import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { useNavigate, useParams } from "react-router-dom";
import { getDivisionById, updateDivisions } from "../../services/DivisionService";
import { fetchCircleList } from "../../services/CircleService";

const UpdateDivision = () => {
  const { divisionId } = useParams();
  const navigate = useNavigate();

  const [division, setDivision] = useState({
    name: "",
    circleId: "",
  });

  const [circle, setCircle] = useState([]);

  useEffect(() => {
    fetchCircleList()
      .then((data) => {
        setCircle(data);
      })
      .catch((error) => {
        console.error("Failed to fetch Circle details:", error);
      });
  }, []);

  useEffect(() => {
    getDivisionById(divisionId)
      .then((data) => {
        setDivision({
          name: data.name,
          circleId: data.circle ? data.circle.circleId : "",
        });
      })
      .catch((error) => {
        console.error("Failed to fetch Division details:", error);
      });
  }, [divisionId]);

  const fieldChange = (event, property) => {
    setDivision({ ...division, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateDivisions(divisionId, {
        name: division.name,
        circleId: division.circleId,
      });
      navigate("/division");
    } catch (error) {
      console.error("Failed to update Division. Please try again later.", error);
    }
  };

  const handleBack = () => {
    navigate("/division");
  };

  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <h3>Update Division</h3>
          </div>
          <form className="border border-secondary p-3 rounded">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="divisionName" className="form-label">
                  Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "name")}
                  value={division.name}
                  type="text"
                  className="form-control"
                  id="divisionName"
                  placeholder="Enter Division Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="circleSelect" className="form-label">
                  Circle
                </label>
                <select
                  onChange={(e) => fieldChange(e, "circleId")}
                  className="form-control"
                  id="circleSelect"
                  value={division.circleId}
                >
                  <option value="" disabled>
                    {division.circle ? division.circle.name : "Select Circle"}
                  </option>
                  {circle.map((circleItem) => (
                    <option key={circleItem.circleId} value={circleItem.circleId}>
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

export default UpdateDivision;
