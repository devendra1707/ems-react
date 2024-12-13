import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  deleteCircleById,
  fetchCircleList,
} from "../../services/CircleService";
import { formatDate } from "../../config/timestamp";

const CircleDetails = () => {
  const navigate = useNavigate();
  const [circle, setCircle] = useState([]);

  useEffect(() => {
    fetchCircleList()
      .then((data) => {
        setCircle(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch circle details:", error);
      });
  }, []);

  const handleDelete = (circleId) => {
    deleteCircleById(circleId)
      .then(() => {
        console.log("Circle deleted successfully: " + circleId);
        // Update the list without reloading
        setCircle((prev) => prev.filter((g) => g.circleId !== circleId));
      })
      .catch((error) => {
        alert("This is mapped with another entry: " + circleId);
        console.log("Failed to delete circle:", error);
      });
  };

  const handleAdd = () => {
    navigate(`/create-circle`);
  };

  return (
    <Base>
      {/* {JSON.stringify(circle)} */}
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
                <h5 className="card-title mb-0">Circle Details</h5>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>S. No.</th>
                      <th>Name</th>
                      <th>Zone</th>
                      <th>Created Date</th>
                      <th>Modified Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {circle.length > 0 ? (
                      circle.map((details, index) => (
                        <tr key={details.uuid}>
                          <td>{index + 1}</td>
                          <td>{details.name || "N/A"}</td>
                          <td>{details.zone.name || "N/A"}</td>
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
                                  navigate(`/edit-circle/${details.circleId}`)
                                }
                              >
                                <FiEdit />
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(details.circleId)}
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

export default CircleDetails;
