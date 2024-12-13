import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  deleteDesignationById,
  fetchDesignationList,
} from "../../services/DesignationService";
import { formatDate } from "../../config/timestamp";

const DesignationDetails = () => {
  const navigate = useNavigate();
  const [designation, setDesignation] = useState([]);

  useEffect(() => {
    fetchDesignationList()
      .then((data) => {
        setDesignation(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch designation details:", error);
      });
  }, []);

  const handleDelete = (designationId) => {
    deleteDesignationById(designationId)
      .then(() => {
        console.log("Designation deleted successfully: " + designationId);
        // Update the list without reloading
        setDesignation((prev) =>
          prev.filter((g) => g.designationId !== designationId)
        );
      })
      .catch((error) => {
        alert("This is mapped with another entry: " + designationId);
        console.log("Failed to delete designation:", error);
      });
  };

  const handleAdd = () => {
    navigate(`/create-designation`);
  };

  return (
    <Base>
      {/* {JSON.stringify(designation)} */}
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
                <h5 className="card-title mb-0">Designation Details</h5>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>S. No.</th>
                      <th>Title</th>
                      <th>Level</th>
                      <th>Staff Category</th>
                      <th>Created Date</th>
                      <th>Modified Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {designation.length > 0 ? (
                      designation.map((details, index) => (
                        <tr key={details.uuid}>
                          <td>{index + 1}</td>
                          <td>{details.title || "N/A"}</td>
                          <td>{details.level}</td>
                          <td>{details.staffCategory.title || "N/A"}</td>
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
                                    `/edit-designation/${details.designationId}`
                                  )
                                }
                              >
                                <FiEdit />
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                  handleDelete(details.designationId)
                                }
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

export default DesignationDetails;
