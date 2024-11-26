import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { fetchAdgList } from "../../services/AdgService";
import { saveZone } from "../../services/ZoneService";
const CreateZone = () => {
  const [zone, setZone] = useState({
    name: "",
    adgId: "",
  });

  const [adg, setAdg] = useState([]);

  useEffect(() => {
    fetchAdgList()
      .then((data) => {
        setAdg(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Adg details:", error);
      });
  }, []);

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setZone({ ...zone, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    saveZone(zone)
      .then((data) => {
        navigate("/zone");
      })
      .catch((error) => {
        console.log("Failed to Save Zone. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setZone({
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
              <h3>Create Zone</h3>
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
                  Adg
                </label>
                <select
                  onChange={(e) => fieldChange(e, "adgId")}
                  className="form-control"
                  id="adg"
                  value={zone.adgId}
                >
                  <option value="">Select Adg</option>
                  {adg.map((adg) => (
                    <option key={adg.adgId} value={adg.adgId}>
                      {adg.name}
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

export default CreateZone;
