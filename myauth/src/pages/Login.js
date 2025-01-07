import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook
import axios from "axios";  // Import axios

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      // Send login request using axios
      const response = await axios.post("http://localhost:8080/login", loginData);

      if (response.status === 200) {
        setSuccess(response.data.message); // Successful login
        setError(""); // Clear any previous errors
        // Redirect to the products page after successful login
        navigate("/profile");
      } else {
        setError(response.data.message); // Display error message
        setSuccess(""); // Clear success message
      }
    } catch (error) {
      // Handle errors
      setError("There was an error. Please try again.");
      setSuccess(""); // Clear success message
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "25rem" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <div className="mt-3 text-center">
            <a href="#!" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>
        </form>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
};

export default Login;
