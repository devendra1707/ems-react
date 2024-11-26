import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { getDepartmentById, updateDepartments } from "../../services/DepartmentService";
const UpdateDepartment = () => {
  const { departmentId } = useParams();

  const navigate = useNavigate();

  const [department, setDepartment] = useState({
    title: "",
  });

  const fieldChange = (event, property) => {
    // console.log("Changing ...");
    setDepartment({ ...department, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form Submitted ...");

    try {
      await updateDepartments(departmentId, {
        title: department.title,
      });
      // alert("Department is Updated Successfully");
      navigate("/department");
    } catch (error) {
      console.log("Failed to Update Department. Please try again later.");
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/department");
  };

  useEffect(() => {
    getDepartmentById(departmentId)
      .then((data) => {
        setDepartment(data);
        // console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Failed to fetch Department details:", error);
      });
  }, [departmentId]);

  return (
    <Base>
    <main className="content px-5 py-2">
      <div className="container-fluid mt-3">
        <div className="text-center">
          <i>
            <h3>Update Department</h3>
          </i>
        </div>
        <form action="" className="border border-secondary p-3 rounded">
        <div className="row">
              <div className="col-md-12 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Title
                </label>
                <input
                  onChange={(e) => fieldChange(e, "title")}
                  value={department.title}
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
  )
}

export default UpdateDepartment