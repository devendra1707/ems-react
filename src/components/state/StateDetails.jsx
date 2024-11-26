import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deleteStateById, fetchStateList } from "../../services/StateService";

const StateDetails = () => {

  const navigate = useNavigate();
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchStateList()
      .then((data) => {
        setState(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch state details:", error);
      });
  }, []);

  const handleDelete = (stateId) => {
    deleteStateById(stateId)
      .then(() => {
        console.log("State deleted successfully: " + stateId);
        // Update the list without reloading
        setState((prev) => prev.filter((g) => g.stateId !== stateId));
      })
      .catch((error) => {
        alert("This is mapped with another entry: " + stateId);
        console.log("Failed to delete state:", error);
      });
  };

  const handleAdd = (id) => {
    navigate(`/create-state`);
  };

  return (
    <Base>
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
                <h5 className="card-title mb-0">State Details</h5>
              </div>
            </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>About State</th>
                    <th>Total Projects</th>
                    <th>Total Projects Completed</th>
                    <th>Total Offices</th>
                    <th>State Code</th>
                    <th>Pate</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {state.length > 0 ? (
                      state.map((details, index) => (
                        <tr key={details.uuid}>
                          <td>{index + 1}</td>

                          <td>{details.name || "N/A"}</td>
                          <td>
                            {details.aboutState}
                          </td>
                          <td>
                            {details.totalProjects}
                          </td>
                          <td>
                            {details.totalProjectsCompleted}
                          </td>
                          <td>
                            {details.totalOffices}
                          </td>
                          <td>
                            {details.stateCode}
                          </td>
                          <td>
                            {details.path}
                          </td>
                          
                         
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-secondary btn-sm"
                                onClick={() =>
                                  navigate(`/edit-state/${details.stateId}`)
                                }
                              >
                                <FiEdit />
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(details.stateId)}
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

export default StateDetails;
