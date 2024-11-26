import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAdgList } from "../../services/AdgService";
import { getZoneById, updateZones } from "../../services/ZoneService";

const UpdateZone = () => {
  const { zoneId } = useParams();
  const navigate = useNavigate();

  const [zone, setZone] = useState({
    name: "",
    adgId: "",
  });

  const [adg, setAdg] = useState([]);

  // Fetch the ADG list
  useEffect(() => {
    fetchAdgList()
      .then((data) => {
        setAdg(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Adg details:", error);
      });
  }, []);

  // Fetch the zone details by ID
  useEffect(() => {
    getZoneById(zoneId)
      .then((data) => {
        setZone({
          name: data.name,
          adgId: data.adg ? data.adg.adgId : "",
        });
      })
      .catch((error) => {
        console.log("Failed to fetch Zone details:", error);
      });
  }, [zoneId]);

  const fieldChange = (event, property) => {
    setZone({ ...zone, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateZones(zoneId, {
        name: zone.name,
        adgId: zone.adgId,
      });
      navigate("/zone");
    } catch (error) {
      console.log("Failed to Update Zone. Please try again later.");
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/zone");
  };

  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <h3>Update Zone</h3>
          </div>
          <form className="border border-secondary p-3 rounded">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="zoneName" className="form-label">
                  Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "name")}
                  value={zone.name}
                  type="text"
                  className="form-control"
                  id="zoneName"
                  placeholder="Enter Zone Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="adgSelect" className="form-label">
                  Adg
                </label>
                <select
                  onChange={(e) => fieldChange(e, "adgId")}
                  className="form-control"
                  id="adgSelect"
                  value={zone.adgId}
                >
                  <option value="" disabled>
                    Select ADG
                  </option>
                  {adg.map((adgItem) => (
                    <option key={adgItem.adgId} value={adgItem.adgId}>
                      {adgItem.name}
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

export default UpdateZone;
