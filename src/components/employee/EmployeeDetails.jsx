import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
  deleteEmployeeById,
  fetchEmployeeList,
} from "../../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import Base from "../navbar/Base";
import { formatDate } from "../../config/timestamp";

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetchEmployeeList()
      .then((data) => {
        setEmployee(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch employee details:", error);
      });
  }, []);

  const handleDelete = (employeeId) => {
    deleteEmployeeById(employeeId)
      .then(() => {
        console.log("Employee deleted successfully: " + employeeId);
        setEmployee((prev) => prev.filter((g) => g.employeeId !== employeeId));
      })
      .catch((error) => {
        alert("This is mapped with another entry: " + employeeId);
        console.log("Failed to delete employee:", error);
      });
  };

  const handleAdd = () => {
    navigate(`/create-employee`);
  };

  return (
    <Base>
      {/* {JSON.stringify(employee)} */}

      <main className="content px-3 py-2">
        <div className="container-fluid mt-3">
          <div className="card border-0">
            <div className="card-header bg-light">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <button
                  className="btn btn-secondary position-absolute start-0"
                  onClick={handleAdd}
                >
                  <IoMdAddCircleOutline className="me-1" />
                  Add
                </button>
                <h5 className="card-title mb-0">Employee Details</h5>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>S. No.</th>
                      <th>First NAme</th>
                      <th>Middle Name</th>
                      <th>Last Name</th>
                      <th>Date of Birth</th>
                      <th>Father/Husband Name</th>
                      <th>Employee Code</th>
                      <th>Gender</th>
                      <th>Department</th>
                      <th>Region</th>
                      <th>ADG</th>
                      <th>Zone</th>
                      <th>Circle</th>
                      <th>Division</th>
                      <th>Employee Group</th>
                      <th>Staff Category</th>
                      <th>Designation</th>
                      <th>Post Held</th>
                      <th>Cadre</th>
                      <th>Specialisation</th>
                      <th>Reservation Clasification</th>
                      <th>Station</th>
                      <th>Employee Status</th>
                      <th>Current Office</th>
                      <th>Reporting Office</th>
                      <th>DoPT Batch</th>
                      <th>Pay Scale</th>

                      <th>Date Of Joining Current Office</th>
                      <th>Reference To Order Of Posting</th>
                      <th>Additional Charge</th>
                      <th>Additional Duty</th>
                      <th>Created Date</th>
                      <th>Modified Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.length > 0 ? (
                      employee.map((details, index) => (
                        <tr key={details.uuid}>
                          <td>{index + 1}</td>
                          <td>{details.firstName}</td>
                          <td>{details.middleName}</td>
                          <td>{details.lastName}</td>
                          <td>{details.dateofBirth}</td>
                          <td>{details.father_HusbandName}</td>
                          <td>{details.employeeCode}</td>
                          <td>{details.gender.title}</td>
                          <td>{details.department.title}</td>
                          <td>{details.region.name}</td>
                          <td>{details.adg.name}</td>
                          <td>{details.zone.name}</td>
                          <td>{details.circle.name}</td>
                          <td>{details.division.name}</td>
                          <td>{details.employeeGroup.title}</td>
                          <td>{details.staffCategory.title}</td>
                          <td>{details.designation.title}</td>
                          <td>{details.postHeld.title}</td>
                          <td>{details.cadre.title}</td>
                          <td>{details.specialisation.title}</td>
                          <td>{details.reservationClasification.title}</td>
                          <td>{details.station.name}</td>
                          <td>{details.employeeStatus.title}</td>
                          <td>{details.currentOffice}</td>
                          <td>{details.reportingOffice}</td>
                          <td>{details.doPTBatch}</td>
                          <td>{details.payScale.scaleOfPay}</td>

                          <td>{details.dateOfJoiningCurrentOffice}</td>
                          <td>{details.referenceToOrderOfPosting}</td>
                          <td>{details.additionalCharge}</td>
                          <td>{details.additionalDuty}</td>
                          <td>
                            {formatDate(details.createdDate).toLocaleString()}
                          </td>
                          <td>
                            {formatDate(details.modifiedDate).toLocaleString()}
                          </td>

                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-secondary btn-sm"
                                onClick={() =>
                                  navigate(
                                    `/edit-employee/${details.employeeId}`
                                  )
                                }
                              >
                                <FiEdit />
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(details.employeeId)}
                              >
                                <MdDeleteForever />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
                          No data available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Base>
  );
};

export default EmployeeDetails;
