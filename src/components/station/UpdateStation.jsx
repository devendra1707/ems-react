import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { fetchStateList } from "../../services/StateService";
import { getStationById, updateStations } from "../../services/StationService";
const UpdateStation = () => {
  const { stationId } = useParams();
  const navigate = useNavigate();

  const [station, setStation] = useState({
    name: "",
    stateId: "",
  });

  const [state, setState] = useState([]);

  // Fetch the ADG list
  useEffect(() => {
    fetchStateList()
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Adg details:", error);
      });
  }, []);

  // Fetch the station details by ID
  useEffect(() => {
    getStationById(stationId)
      .then((data) => {
        setStation({
          name: data.name,
          stateId: data.state ? data.state.stateId : "",
        });
      })
      .catch((error) => {
        console.log("Failed to fetch Station details:", error);
      });
  }, [stationId]);

  const fieldChange = (event, property) => {
    setStation({ ...station, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateStations(stationId, {
        name: station.name,
        stateId: station.stateId,
      });
      navigate("/station");
    } catch (error) {
      console.log("Failed to Update Station. Please try again later.");
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/station");
  };

  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <h3>Update Station</h3>
          </div>
          <form className="border border-secondary p-3 rounded">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="stationName" className="form-label">
                  Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "name")}
                  value={station.name}
                  type="text"
                  className="form-control"
                  id="stationName"
                  placeholder="Enter Station Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="adgSelect" className="form-label">
                  Adg
                </label>
                <select
                  onChange={(e) => fieldChange(e, "stateId")}
                  className="form-control"
                  id="station"
                  value={station.stateId}
                >
                  <option value="" disabled>
                    Select ADG
                  </option>
                  {state.map((stateItem) => (
                    <option key={stateItem.adgId} value={stateItem.stateId}>
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



export default UpdateStation