import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { useNavigate, useParams } from "react-router-dom";
import {
  getDesignationById,
  updateDesignations,
} from "../../services/DesignationService";
import { fetchStaffCategoryList } from "../../services/StaffCategoryService";
const UpdateDesignation = () => {
  const { designationId } = useParams();

  const navigate = useNavigate();

  const [designation, setDesignation] = useState({
    title: "",
    level: "",
    staffCategoryId: "",
  });

  const [staffCategory, setStaffCategory] = useState([]);

  useEffect(() => {
    fetchStaffCategoryList()
      .then((data) => {
        setStaffCategory(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch StaffCategory details:", error);
      });
  }, []);

  const fieldChange = (event, property) => {
    // console.log("Changing ...");
    setDesignation({ ...designation, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateDesignations(designationId, {
        title: designation.title,
        level: designation.level,
        staffCategoryId: designation.staffCategoryId,
      });
      navigate("/designation");
    } catch (error) {
      console.log("Failed to Update Designation. Please try again later.");
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/designation");
  };

  useEffect(() => {
    getDesignationById(designationId)
      .then((data) => {
        setDesignation(data);
      })
      .catch((error) => {
        console.log("Failed to fetch Designation details:", error);
      });
  }, [designationId]);

  return (
    <Base>
      {/* {JSON.stringify(designation)} */}
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Update Designation</h3>
            </i>
          </div>
          <form action="" className="border border-secondary p-3 rounded">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Title
                </label>
                <input
                  onChange={(e) => fieldChange(e, "title")}
                  value={designation.title}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Staff Category
                </label>
                <select
                  onChange={(e) => fieldChange(e, "staffCategoryId")}
                  className="form-control"
                  id="staffCategory"
                  value={designation.staffCategoryId}
                >
                  <option value="">{designation.staffCategory.title}</option>
                  {staffCategory.map((category) => (
                    <option
                      key={category.staffCategoryId}
                      value={category.staffCategoryId}
                    >
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Level
                </label>
                <input
                  onChange={(e) => fieldChange(e, "level")}
                  value={designation.level}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
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

export default UpdateDesignation;
