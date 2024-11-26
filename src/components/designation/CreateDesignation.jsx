import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { saveDesignation } from "../../services/DesignationService";
import { fetchStaffCategoryList } from "../../services/StaffCategoryService";
const CreateDesignation = () => {
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

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setDesignation({ ...designation, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    saveDesignation(designation)
      .then((data) => {
        navigate("/designation");
      })
      .catch((error) => {
        console.log("Failed to Save Designation. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setDesignation({
      title: "",
      level: "",
      staffCategoryId: "",
    });
  };
  return (
    <Base>
      {/* {JSON.stringify(staffCategory)} */}
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Create Designation</h3>
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
                  <option value="">Select a category</option>
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

export default CreateDesignation;
