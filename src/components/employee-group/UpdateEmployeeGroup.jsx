import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeGroupById, updateEmployeeGroups } from "../../services/EmployeeGroupService";
const UpdateEmployeeGroup = () => {
  const { employeeGroupId } = useParams();

  const navigate = useNavigate();

  const [employeeGroup, setEmployeeGroup] = useState({
    title: "",
  });

  const fieldChange = (event, property) => {
    // console.log("Changing ...");
    setEmployeeGroup({ ...employeeGroup, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form Submitted ...");

    try {
      await updateEmployeeGroups(employeeGroupId, {
        title: employeeGroup.title,
      });
      // alert("EmployeeGroup is Updated Successfully");
      navigate("/employee-group");
    } catch (error) {
      console.log("Failed to Update EmployeeGroup. Please try again later.");
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/employee-group");
  };

  useEffect(() => {
    getEmployeeGroupById(employeeGroupId)
      .then((data) => {
        setEmployeeGroup(data);
        // console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Failed to fetch EmployeeGroup details:", error);
      });
  }, [employeeGroupId]);
  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Update Employee Group</h3>
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
                  value={employeeGroup.title}
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

export default UpdateEmployeeGroup;
