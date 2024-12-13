import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deletePayScaleById, fetchPayScaleList } from "../../services/PayScaleService";
import { formatDate } from "../../config/timestamp";

const PayScaleDetails = () => {
  const navigate = useNavigate();
  const [payScale, setPayScale] = useState([]);

  useEffect(() => {
    fetchPayScaleList()
      .then((data) => {
        setPayScale(data);
      })
      .catch((error) => {
        console.log("Failed to fetch payScale details:", error);
      });
  }, []);

  const handleDelete = (payScaleId) => {
    deletePayScaleById(payScaleId)
      .then(() => {
        console.log("PayScale deleted successfully: " + payScaleId);
        // Update the list without reloading
        setPayScale((prev) => prev.filter((g) => g.payScaleId !== payScaleId));
      })
      .catch((error) => {
        alert("This is mapped with another entry: " + payScaleId);
        console.log("Failed to delete payScale:", error);
      });
  };

  const handleAdd = () => {
    navigate(`/create-pay-scale`);
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
                <h5 className="card-title mb-0">PayScale Details</h5>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>S. No.</th>
                      <th>Scale of Pay</th>
                      <th>Level</th>
                      <th>Grade Pay</th>
                      <th>Created Date</th>
                      <th>Modified Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payScale.length > 0 ? (
                      payScale.map((details, index) => (
                        <tr key={details.uuid}>
                          <td>{index + 1}</td>

                          <td>{details.scaleOfPay || "N/A"}</td>
                          <td>{details.level || "N/A"}</td>
                          <td>{details.gradePay || "N/A"}</td>
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
                                    `/edit-pay-scale/${details.payScaleId}`
                                  )
                                }
                              >
                                <FiEdit />
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(details.payScaleId)}
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

export default PayScaleDetails;
