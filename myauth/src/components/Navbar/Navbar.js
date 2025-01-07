import React from 'react'

const Navbar = () => {
    
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Modern Furniture Pacific</a>
                <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/products">Products</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="/testmonials">Testimonials</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contacts">Contact Us</a>
                        </li>
                    </ul>
                    <div class="search-icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div class="shop-icon">
                        <ul>
                            <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                            <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
                            <li><a href="/login"><i class="fa-solid fa-user"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
</>
  )
}

export default Navbar