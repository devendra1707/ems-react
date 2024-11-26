import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deleteSpecialisationById, fetchSpecialisationList } from "../../services/SpecialisationService";

const SpecialisationDetails = () => {
  const navigate = useNavigate();
  const [specialisation, setSpecialisation] = useState([]);

  useEffect(() => {
    fetchSpecialisationList()
      .then((data) => {
        setSpecialisation(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch specialisation details:", error);
      });
  }, []);

  const handleDelete = (specialisationId) => {
    deleteSpecialisationById(specialisationId)
      .then(() => {
        console.log("Specialisation deleted successfully: " + specialisationId);
        // Update the list without reloading
        setSpecialisation((prev) => prev.filter((g) => g.specialisationId !== specialisationId));
      })
      .catch((error) => {
        alert("This is mapped with another entry: " + specialisationId);
        console.log("Failed to delete specialisation:", error);
      });
  };

  const handleAdd = (id) => {
    navigate(`/create-specialisation`);
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
                <h5 className="card-title mb-0">Specialisation Details</h5>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
              <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>S. No.</th>
                      <th>Title</th>
                      <th>Created Date</th>
                      <th>Modified Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specialisation.length > 0 ? (
                      specialisation.map((details, index) => (
                        <tr key={details.uuid}>
                          <td>{index + 1}</td>

                          <td>{details.title || "N/A"}</td>
                          <td>
                            {new Date(details.createdDate).toLocaleString()}
                          </td>
                          <td>
                            {new Date(details.modifiedDate).toLocaleString()}
                          </td>

                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-secondary btn-sm"
                                onClick={() =>
                                  navigate(`/edit-specialisation/${details.specialisationId}`)
                                }
                              >
                                <FiEdit />
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(details.specialisationId)}
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

export default SpecialisationDetails;
