import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to your backend or an API
    console.log(formData);
  };

  return (
    <>
      <section className="contact-us-sec py-5">
        <div className="container">
          <div className="title text-center mb-4">
            <h6>Get In Touch</h6>
            <h2>Contact <span>Us</span></h2>
          </div>

          {/* Contact Form */}
          <div className="row">
            <div className="col-md-6">
              <h4>Contact Form</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-nav bg-dark">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="col-md-6">
              <h4>Contact Information</h4>
              <p><strong>Address:</strong><i class="fa-solid fa-location-dot"></i> 112, 60103, Kenya</p>
              <p><strong>Email:</strong><i class="fa-solid fa-envelope"></i> dmurangiri9
              2gmail.com</p>
              <p><strong>Phone:</strong><i class="fa-solid fa-phone"></i> 0701152721</p>
              <p><strong>Business Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
