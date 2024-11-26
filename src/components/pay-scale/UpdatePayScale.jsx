import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { getPayScaleById, updatePayScales } from "../../services/PayScaleService";
const UpdatePayScale = () => {
  const { payScaleId } = useParams();

  const navigate = useNavigate();

  const [payScale, setPayScale] = useState({
    scaleOfPay: "",
    level: "",
    gradePay: "",
  });

  const fieldChange = (event, property) => {
    // console.log("Changing ...");
    setPayScale({ ...payScale, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form Submitted ...");

    try {
      await updatePayScales(payScaleId, {
        scaleOfPay: payScale.scaleOfPay,
        level: payScale.level,
        gradePay: payScale.gradePay,
      });
      // alert("PayScale is Updated Successfully");
      navigate("/pay-scale");
    } catch (error) {
      console.log("Failed to Update PayScale. Please try again later.");
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/pay-scale");
  };

  useEffect(() => {
    getPayScaleById(payScaleId)
      .then((data) => {
        setPayScale(data);
        // console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Failed to fetch PayScale details:", error);
      });
  }, [payScaleId]);

  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Update PayScale</h3>
            </i>
          </div>
          <form action="" className="border border-secondary p-3 rounded">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Scale of Pay
                </label>
                <input
                  onChange={(e) => fieldChange(e, "scaleOfPay")}
                  value={payScale.scaleOfPay}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Level
                </label>
                <input
                  onChange={(e) => fieldChange(e, "level")}
                  value={payScale.level}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="cusName" className="form-label">
                  Grade Pay
                </label>
                <input
                  onChange={(e) => fieldChange(e, "gradePay")}
                  value={payScale.gradePay}
                  type="text"
                  className="form-control"
                  id="cusName"
                  placeholder="Enter here"
                />
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
export default UpdatePayScale;
