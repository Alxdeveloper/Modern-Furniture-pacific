import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="footer-img w-75">
                        <a class="navbar-brand text-white" href="#">Densir <br/> Furniture</a>
                        <p class="mt-4">We deliver high quality Furnitures to make life easier and comfortable</p>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="f-title"><h3>Quick Links</h3></div>
                    <ul class="f-links">
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Home</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">About Us</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Blogs</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Products</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Review</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-2">
                    <div class="f-title"><h3>Categories</h3></div>
                    <ul class="f-links">
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Wooden</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Plywood</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Plastic</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Foam</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Luxury</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Comfy</a></li>
                    </ul>
                </div>
                <div class="col-lg-2">
                    <div class="f-title"><h3>My Account</h3></div>
                    <ul class="f-links">
                        <li><i class="fa-solid fa-chevron-right"></i><a href="/register">My Account</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="/">Discount</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Returns</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Order History</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Privacy Ploicy</a></li>
                        <li><i class="fa-solid fa-chevron-right"></i><a href="">Shipments</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <div class="f-title"><h3>Contact Info</h3></div>
                    <ul class="f-list">
                        <li><i class="fa-solid fa-location-dot"></i><a href="">112 60100, Embu.</a></li>
                        <li><i class="fa-solid fa-phone"></i><a href="tel:0701152721">0701152721</a></li>
                        <li><i class="fa-solid fa-envelope"></i><a href="mailto:codingwing@gmail.com">dmurangiri92@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p className='align-items-center flex-end'>Designed by Denser Tech &copy; 2024</p>
    </footer>
    
    </div>
  )
}

export default Footer