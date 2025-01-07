import React from 'react';
import { gallery1, gallery2 } from '../assets/image/indexes';  // Import images used in the About section

const About = () => {
  return (
    <>
      <section className="about-banner-sec">
        <div className="container-fluid">
          <img src={gallery1} alt="Gallery Image 1" />
          <div className="about-main">
            <h4>Welcome to Densir Furniture</h4>
            <h1>Crafting Quality Furniture <span>For Every Home</span></h1>
            <p>
              Our commitment to delivering modern, high-quality furniture ensures that every piece we create brings both comfort and style to your living spaces. At Densir Furniture, we believe in creating pieces that offer timeless beauty and exceptional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="about-info-sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-info-box">
                <h3>Why Choose Us?</h3>
                <p>
                  We specialize in creating furniture that not only serves a functional purpose but also adds a touch of elegance to your home. With decades of experience in the industry, our designs focus on innovation, sustainability, and comfort.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-info-box">
                <h3>Our Values</h3>
                <ul>
                  <li><i className="fa-solid fa-check-circle"></i> Sustainable Materials</li>
                  <li><i className="fa-solid fa-check-circle"></i> Customizable Designs</li>
                  <li><i className="fa-solid fa-check-circle"></i> Affordable Pricing</li>
                  <li><i className="fa-solid fa-check-circle"></i> Exceptional Craftsmanship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-sec py-5">
        <div className="container">
          <div className="title text-center">
            <h6>Our Work</h6>
            <h2>Explore Our <span>Gallery</span></h2>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="gallery-box">
                <img src={gallery1} alt="Gallery Image 1" className="w-100" />
                <div className="gallery-overlay">
                  <h4>Modern Living Room Design</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="gallery-box">
                <img src={gallery2} alt="Gallery Image 2" className="w-100" />
                <div className="gallery-overlay">
                  <h4>Minimalist Bedroom Collection</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2>Join Us in Creating the Perfect Home</h2>
          <p>
            From classic to contemporary, every piece of furniture we create is designed with your needs in mind. Let's work together to transform your space into something extraordinary.
          </p>
          <button type="button" className="btn btn-nav bg-dark">Explore Our Collection</button>
        </div>
      </section>
    </>
  );
};

export default About;
