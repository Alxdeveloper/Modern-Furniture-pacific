import React from "react";
//import { testimonial1, testimonial2, testimonial3 } from "../assets/image/indexes"; // Import testimonial images

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-sec py-5">
        <div className="container">
          <div className="title text-center">
            <h6>What Our Customers Say</h6>
            <h2>Client <span>Testimonials</span></h2>
          </div>

          {/* Testimonials carousel or grid */}
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="testimonial-box">
                <div className="testimonial-img">
                 {/* <img src={testimonial1} alt="Customer 1" */}
                </div>
                <div className="testimonial-content">
                  <p>
                    "Densir Furniture has truly transformed my home. The modern designs and comfort are amazing! I couldn’t be happier with my purchases."
                  </p>
                  <h5>Jane Doe</h5>
                  <span>Interior Designer</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-box">
                <div className="testimonial-img">
                  {/* <img src={testimonial1} alt="Customer 1" */}
                </div>
                <div className="testimonial-content">
                  <p>
                    "The quality of the furniture is outstanding. Delivery was smooth, and the customer service team was fantastic throughout."
                  </p>
                  <h5>John Smith</h5>
                  <span>Architect</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-box">
                <div className="testimonial-img">
                  {/* <img src={testimonial1} alt="Customer 1" */}
                </div>
                <div className="testimonial-content">
                  <p>
                    "I’ve recommended Densir Furniture to all my friends. The designs fit perfectly into my home, and the quality is top-notch."
                  </p>
                  <h5>Sarah Williams</h5>
                  <span>Homeowner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Add a button or call to action */}
          <div className="text-center mt-4">
            <button type="button" className="btn btn-nav bg-dark">
              Read More Reviews
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
