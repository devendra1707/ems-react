import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { useNavigate, useParams } from "react-router-dom";
import { getCircleById, updateCircles } from "../../services/CircleService";
import { fetchZoneList } from "../../services/ZoneService";

const UpdateCircle = () => {
  const { circleId } = useParams();
  const navigate = useNavigate();

  const [circle, setCircle] = useState({
    name: "",
    zoneId: "",
  });

  const [zone, setZone] = useState([]);

  useEffect(() => {
    // Fetch zone list
    fetchZoneList()
      .then((data) => {
        setZone(data);
      })
      .catch((error) => {
        console.error("Failed to fetch Zone details:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch circle details by ID
    getCircleById(circleId)
      .then((data) => {
        setCircle({
          name: data.name,
          zoneId: data.zone ? data.zone.zoneId : "",
        });
      })
      .catch((error) => {
        console.error("Failed to fetch Circle details:", error);
      });
  }, [circleId]);

  const fieldChange = (event, property) => {
    setCircle({ ...circle, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateCircles(circleId, {
        name: circle.name,
        zoneId: circle.zoneId,
      });
      navigate("/circle");
    } catch (error) {
      console.error("Failed to update Circle. Please try again later.", error);
    }
  };

  const handleBack = () => {
    navigate("/circle");
  };

  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <h3>Update Circle</h3>
          </div>
          <form className="border border-secondary p-3 rounded">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="circleName" className="form-label">
                  Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "name")}
                  value={circle.name}
                  type="text"
                  className="form-control"
                  id="circleName"
                  placeholder="Enter Circle Name"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="zoneSelect" className="form-label">
                  Zone
                </label>
                <select
                  onChange={(e) => fieldChange(e, "zoneId")}
                  className="form-control"
                  id="zoneSelect"
                  value={circle.zoneId}
                >
                  <option value="" disabled>
                    Select Zone
                  </option>
                  {zone.map((zoneItem) => (
                    <option key={zoneItem.zoneId} value={zoneItem.zoneId}>
                      {zoneItem.name}
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

export default UpdateCircle;
