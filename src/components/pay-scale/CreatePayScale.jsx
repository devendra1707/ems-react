import React, { useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { savePayScale } from "../../services/PayScaleService";
const CreatePayScale = () => {
  const [payScale, setPayScale] = useState({
    scaleOfPay: "",
    level: "",
    gradePay: "",
  });

  const navigate = useNavigate();
  const fieldChange = (event, property) => {
    setPayScale({ ...payScale, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    savePayScale(payScale)
      .then((data) => {
        navigate("/pay-scale");
      })
      .catch((error) => {
        console.log("Failed to Save PayScale. Please try again later.");
        console.log(error);
      });
  };

  const handleReset = () => {
    setPayScale({
      scaleOfPay: "",
      level: "",
      gradePay: "",
    });
  };
  return (
    <Base>
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <i>
              <h3>Create Pay Scale</h3>
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
                  type="scaleOfPay"
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
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </main>
    </Base>
  );
};

export default CreatePayScale;
