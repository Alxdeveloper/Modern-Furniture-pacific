import React from "react";

const Sidebar = ({ setActiveTab }) => {
  return (
    <div
      className="d-flex flex-column p-3 bg-light"
      style={{ width: "250px", height: "100vh", position: "fixed" }}
    >
      <h3 className="text-center mb-4">Profile</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <button
            className="btn btn-link"
            onClick={() => setActiveTab("profile")}
          >
            Edit Profile
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link"
            onClick={() => setActiveTab("shipping")}
          >
            Shipping Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link"
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link"
            onClick={() => setActiveTab("cart")}
          >
            My Cart Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link"
            onClick={() => setActiveTab("checkout")}
          >
            Checkout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
