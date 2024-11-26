import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { fetchCircleList } from "../../services/CircleService";
import { saveAdg } from "../../services/AdgService";
import { fetchRegionList } from "../../services/RegionService";
const CreateAdg = () => {
  const [adg, setAdg] = useState({
    name: "",
    regionId: "",
  });

  const [region, setRegion] = useState([]);

  useEffect(() => {
    fetchRegionList()
      .then((data) => {
        setRegion(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Region details:", error);
      });
  }, []);

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setAdg({ ...adg, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    saveAdg(adg)
      .then((data) => {
        navigate("/adg");
      })
      .catch((error) => {
        console.log("Failed to Save Adg. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setAdg({
      name: "",
      regionId: "",
    });
  };
  return (
    <Base>
      {/* {JSON.stringify(staffCategory)} */}
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Create Adg</h3>
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
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Region
                </label>
                <select
                  onChange={(e) => fieldChange(e, "regionId")}
                  className="form-control"
                  id="region"
                  value={adg.regionId}
                >
                  <option value="">Select Region</option>
                  {region.map((regions) => (
                    <option key={regions.regionId} value={regions.regionId}>
                      {regions.name}
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

export default CreateAdg;
