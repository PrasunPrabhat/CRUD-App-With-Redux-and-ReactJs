import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Redux/UseReducer";
import { toast } from "react-toastify";
import "./Home.css"; // ✅ Add styling here

const Home = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast.error("❌ User Deleted Successfully!");
  };

  return (
    <div className="container py-4 animate__animated animate__fadeIn mt-4 rounded-5">
      <div className="text-center mb-5">
        <img
          src="./book.gif"
          alt="Animated Book"
          className="img-fluid mb-3 entry-gif"
        />
        <h2 className="fw-bold text-primary">📚 Simple CRUD App With Redux</h2>
        <p className="text-muted">Add, update, or delete users easily!</p>
        <Link to="/create" className="btn btn-success mt-3 px-4 py-2">
          ➕ Create New User
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="fw-bold">{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      to={`/edit/${user.id}`}
                      className="btn btn-sm btn-outline-primary"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-outline-danger ms-2"
                      onClick={() => handleDelete(user.id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  No users found. Add one!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;