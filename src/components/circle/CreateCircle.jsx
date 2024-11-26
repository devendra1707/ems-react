import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { saveCircle } from "../../services/CircleService";
import { fetchZoneList } from "../../services/ZoneService";
const CreateCircle = () => {
  const [circle, setCircle] = useState({
    name: "",
    zoneId: "",
  });

  const [zone, setZone] = useState([]);

  useEffect(() => {
    fetchZoneList()
      .then((data) => {
        setZone(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Zone details:", error);
      });
  }, []);

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setCircle({ ...circle, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    saveCircle(circle)
      .then((data) => {
        navigate("/circle");
      })
      .catch((error) => {
        console.log("Failed to Save Circle. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setCircle({
      name: "",
      zoneId: "",
    });
  };
  return (
    <Base>
      {/* {JSON.stringify(staffCategory)} */}
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Create Circle</h3>
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
                  Zone
                </label>
                <select
                  onChange={(e) => fieldChange(e, "zoneId")}
                  className="form-control"
                  id="sone"
                  value={circle.zoneId}
                >
                  <option value="">Select Zone</option>
                  {zone.map((zoneItem) => (
                    <option
                      key={zoneItem.zoneId}
                      value={zoneItem.zoneId}
                    >
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


export default CreateCircle