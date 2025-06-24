import React, { useState, useEffect } from "react";
import { updateUser } from "../Redux/UseReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Update.css"; // ✅ Create this CSS file for animations

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user);
  const existingUser = users.find((user) => user.id === parseInt(id));

  const [uname, setName] = useState(existingUser ? existingUser.name : "");
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Optional: Scroll to top on load
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: parseInt(id),
        name: uname,
        email: uemail,
      })
    );
    toast.info("User Updated Successfully!");
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="update-card animate__animated animate__fadeInDown shadow-lg p-5 bg-white rounded-4">
        <h3 className="mb-4 text-center text-primary">🔄 Update User</h3>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={uname}
              className="form-control"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-semibold">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={uemail}
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button className="btn btn-success px-4">Update</button>
          </div>
        </form>
        {/* ✅ Back Button */}
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-outline-secondary px-4"
            onClick={() => navigate("/")}
          >
            ⬅️ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
