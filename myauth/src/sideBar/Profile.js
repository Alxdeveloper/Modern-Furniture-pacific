import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const handleLogout = () => {
    // Handle logout, clear session or token, then navigate to login
    localStorage.removeItem("authToken");  // If you're storing token in localStorage
    navigate("/login");
  };

  return (
    <div className="d-flex">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="container-fluid py-5" style={{ marginLeft: "250px" }}>
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <h3 className="mb-4">Profile</h3>

                {/* Show content based on activeTab */}
                {activeTab === "profile" && <h4>Profile Info</h4>}
                {activeTab === "shipping" && <h4>Shipping Details</h4>}
                {activeTab === "settings" && <h4>Settings</h4>}
                {activeTab === "cart" && <h4>My Cart Details</h4>}
                {activeTab === "checkout" && <h4>Checkout</h4>}

                {/* Logout button */}
                <button className="btn btn-danger mt-4" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
