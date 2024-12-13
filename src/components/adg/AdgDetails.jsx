import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deleteAdgById, fetchAdgList } from "../../services/AdgService";
import { formatDate } from "../../config/timestamp";

const AdgDetails = () => {
  const navigate = useNavigate();
  const [adg, setAdg] = useState([]);

  useEffect(() => {
    fetchAdgList()
      .then((data) => {
        setAdg(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch adg details:", error);
      });
  }, []);

  const handleDelete = (adgId) => {
    deleteAdgById(adgId)
      .then(() => {
        console.log("Adg deleted successfully: " + adgId);
        // Update the list without reloading
        setAdg((prev) => prev.filter((g) => g.adgId !== adgId));
      })
      .catch((error) => {
        alert("This is mapped with another entry: " + adgId);
        console.log("Failed to delete adg:", error);
      });
  };

  const handleAdd = () => {
    navigate(`/create-adg`);
  };

  return (
    <Base>
      {/* {JSON.stringify(adg)} */}
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
                <h5 className="card-title mb-0">Adg Details</h5>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>S. No.</th>
                      <th>Name</th>
                      <th>Region</th>
                      <th>Created Date</th>
                      <th>Modified Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adg.length > 0 ? (
                      adg.map((details, index) => (
                        <tr key={details.uuid}>
                          <td>{index + 1}</td>
                          <td>{details.name || "N/A"}</td>

                          <td>{details.region.name || "N/A"}</td>
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
                                  navigate(`/edit-adg/${details.adgId}`)
                                }
                              >
                                <FiEdit />
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(details.adgId)}
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

export default AdgDetails;
