import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deletePostHeldById, fetchPostHeldList } from "../../services/PostHeldService";

const PostHeldDetails = () => {
  const navigate = useNavigate();
  const [postHeld, setPostHeld] = useState([]);

  useEffect(() => {
    fetchPostHeldList()
      .then((data) => {
        setPostHeld(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Failed to fetch postHeld details:", error);
      });
  }, []);

  const handleDelete = (postHeldId) => {
    deletePostHeldById(postHeldId)
      .then(() => {
        console.log("PostHeld deleted successfully: " + postHeldId);
        // Update the list without reloading
        setPostHeld((prev) => prev.filter((g) => g.postHeldId !== postHeldId));
      })
      .catch((error) => {
        alert("This is mapped with another entry: " + postHeldId);
        console.log("Failed to delete postHeld:", error);
      });
  };

  const handleAdd = () => {
    navigate(`/create-postHeld`);
  };

  return (
    <Base>
      {/* {JSON.stringify(postHeld)} */}
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
                <h5 className="card-title mb-0">PostHeld Details</h5>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>S. No.</th>
                      <th>Title</th>
                      <th>Staff Category</th>
                      <th>Created Date</th>
                      <th>Modified Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {postHeld.length > 0 ? (
                      postHeld.map((details, index) => (
                        <tr key={details.uuid}>
                          <td>{index + 1}</td>
                          <td>{details.title || "N/A"}</td>
                          <td>{details.staffCategory.title || "N/A"}</td>
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
                                    `/edit-postHeld/${details.postHeldId}`
                                  )
                                }
                              >
                                <FiEdit />
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(details.postHeldId)}
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

export default PostHeldDetails;
