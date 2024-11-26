import React, { useEffect, useState } from "react";
import Base from "../navbar/Base";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { fetchStaffCategoryList } from "../../services/StaffCategoryService";
import { getPostHeldById, updatePostHelds } from "../../services/PostHeldService";
const UpdatePostHeld = () => {
  const { postHeldId } = useParams();
  const navigate = useNavigate();

  const [postHeld, setPostHeld] = useState({
    title: "",
    staffCategoryId: "",
  });

  const [staffCategory, setStaffCategory] = useState([]);

  useEffect(() => {
    fetchStaffCategoryList()
      .then((data) => {
        setStaffCategory(data);
      })
      .catch((error) => {
        console.error("Failed to fetch Staff Category details:", error);
      });
  }, []);

  useEffect(() => {
    getPostHeldById(postHeldId)
      .then((data) => {
        setPostHeld({
          title: data.title,
          staffCategoryId: data.staffCategory ? data.staffCategory.staffCategoryId : "",
        });
      })
      .catch((error) => {
        console.error("Failed to fetch PostHeld details:", error);
      });
  }, [postHeldId]);

  const fieldChange = (event, property) => {
    setPostHeld({ ...postHeld, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updatePostHelds(postHeldId, {
        title: postHeld.title,
        staffCategoryId: postHeld.staffCategoryId,
      });
      navigate("/post-held");
    } catch (error) {
      console.error("Failed to update PostHeld. Please try again later.", error);
    }
  };

  const handleBack = () => {
    navigate("/post-held");
  };

  return (
    <Base>
    {/* {JSON.stringify(postHeld)} */}
      <main className="content px-5 py-2">
        <div className="container-fluid mt-3">
          <div className="text-center">
            <h3>Update PostHeld</h3>
          </div>
          <form className="border border-secondary p-3 rounded">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="postHeldName" className="form-label">
                  Title
                </label>
                <input
                  onChange={(e) => fieldChange(e, "title")}
                  value={postHeld.title}
                  type="text"
                  className="form-control"
                  id="postHeldName"
                  placeholder="Enter PostHeld Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="circleSelect" className="form-label">
                Staff Category
                </label>
                <select
                  onChange={(e) => fieldChange(e, "staffCategoryId")}
                  className="form-control"
                  id="staffCategory"
                  value={postHeld.staffCategoryId}
                >
                  <option value="" disabled>
                    {postHeld.staffCategory ? postHeld.staffCategory.title : "Select Staff Category"}
                  </option>
                  {staffCategory.map((category) => (
                    <option key={category.staffCategoryId} value={category.staffCategoryId}>
                      {category.title}
                    </option>
                  ))}
                </select>
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


export default UpdatePostHeld