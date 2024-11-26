import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { getRegionById, updateRegions } from "../../services/RegionService";
const UpdateRegion = () => {
  const { regionId } = useParams();

  const navigate = useNavigate();

  const [region, setRegion] = useState({
    name: "",
  });

  const fieldChange = (event, property) => {
    // console.log("Changing ...");
    setRegion({ ...region, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form Submitted ...");

    try {
      await updateRegions(regionId, {
        name: region.name,
      });
      // alert("Region is Updated Successfully");
      navigate("/region");
    } catch (error) {
      console.log("Failed to Update Region. Please try again later.");
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/region");
  };

  useEffect(() => {
    getRegionById(regionId)
      .then((data) => {
        setRegion(data);
        // console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Failed to fetch Region details:", error);
      });
  }, [regionId]);
  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Update Region</h3>
            </i>
          </div>
          <form action="" className="border border-secondary p-3 rounded">
          <div className="row">
              <div className="col-md-12 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Name
                </label>
                <input
                  onChange={(e) => fieldChange(e, "name")}
                  value={region.name}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
                {/* {errors.cusName && (
                  <div className="text-danger">{errors.cusName}</div>
                )} */}
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

export default UpdateRegion;
