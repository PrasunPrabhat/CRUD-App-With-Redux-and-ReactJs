import React, { useState, useEffect } from "react";
import { addUser } from "../Redux/UseReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./Create.css"; // ✅ Create this CSS file

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Optional scroll to top
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id: newId, name, email }));
    toast.success("✅ User Added Successfully!");
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="create-card animate__animated animate__fadeInUp shadow-lg p-5 bg-white rounded-4">
        <h3 className="mb-4 text-center text-success">📝 Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={name}
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
              value={email}
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button className="btn btn-success px-4">Submit</button>
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

export default Create;
