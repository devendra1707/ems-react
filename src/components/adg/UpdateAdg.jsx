import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { useNavigate, useParams } from "react-router-dom";
import { fetchRegionList } from "../../services/RegionService";
import { getAdgById, updateAdgs } from "../../services/AdgService";

const UpdateAdg = () => {
  const { adgId } = useParams();
  const navigate = useNavigate();

  const [adg, setAdg] = useState({
    name: "",
    regionId: "",
  });

  const [region, setRegion] = useState([]);

  // Fetch region list
  useEffect(() => {
    fetchRegionList()
      .then((data) => {
        setRegion(data);
      })
      .catch((error) => {
        console.error("Failed to fetch region details:", error);
      });
  }, []);

  // Fetch ADG details
  useEffect(() => {
    getAdgById(adgId)
      .then((data) => {
        setAdg({
          name: data.name,
          regionId: data.region?.regionId || "",
        });
      })
      .catch((error) => {
        console.error("Failed to fetch ADG details:", error);
      });
  }, [adgId]);

  // Handle field changes
  const fieldChange = (event, property) => {
    setAdg({ ...adg, [property]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateAdgs(adgId, {
        name: adg.name,
        regionId: adg.regionId,
      });
      navigate("/adg");
    } catch (error) {
      console.error("Failed to update ADG. Please try again later.", error);
    }
  };

  // Navigate back
  const handleBack = () => {
    navigate("/adg");
  };

  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Update ADG</h3>
            </i>
          </div>
          <form className="border border-secondary p-3 rounded">
            <div className="row">
              {/* Name Field */}
              <div className="col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "name")}
                  value={adg.name}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter here"
                />
              </div>

              {/* Region Dropdown */}
              <div className="col-md-4 mb-3">
                <label htmlFor="region" className="form-label">
                  Region
                </label>
                <select
                  onChange={(e) => fieldChange(e, "regionId")}
                  className="form-control"
                  id="region"
                  value={adg.regionId}
                >
                  <option value="">Select Region</option>
                  {region.map((regionItem) => (
                    <option
                      key={regionItem.regionId}
                      value={regionItem.regionId}
                    >
                      {regionItem.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="card-body text-center">
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                type="button"
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

export default UpdateAdg;
