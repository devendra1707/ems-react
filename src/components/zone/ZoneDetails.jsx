import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deleteZoneById, fetchZoneList } from "../../services/ZoneService";

const ZoneDetails = () => {
  const navigate = useNavigate();
  const [zone, setZone] = useState([]);

  useEffect(() => {
    fetchZoneList()
      .then((data) => {
        setZone(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch zone details:", error);
      });
  }, []);

  const handleDelete = (zoneId) => {
    deleteZoneById(zoneId)
      .then(() => {
        console.log("Zone deleted successfully: " + zoneId);
        setZone((prev) =>
          prev.filter((g) => g.zoneId !== zoneId)
        );
      })
      .catch((error) => {
        alert("This is mapped with another entry: " + zoneId);
        console.log("Failed to delete zone:", error);
      });
  };

  const handleAdd = () => {
    navigate(`/create-zone`);
  };

  return (
    <Base>
      {/* {JSON.stringify(zone)} */}
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
                <h5 className="card-title mb-0">Zone Details</h5>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>S. No.</th>
                      <th>Name</th>
                      <th>Adg</th>
                      <th>Created Date</th>
                      <th>Modified Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zone.length > 0 ? (
                      zone.map((details, index) => (
                        <tr key={details.uuid}>
                          <td>{index + 1}</td>
                          <td>{details.name || "N/A"}</td>
                          <td>{details.adg.name || "N/A"}</td>
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
                                  navigate(
                                    `/edit-zone/${details.zoneId}`
                                  )
                                }
                              >
                                <FiEdit />
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                  handleDelete(details.zoneId)
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

export default ZoneDetails;
