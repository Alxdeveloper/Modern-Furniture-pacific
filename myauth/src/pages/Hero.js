import React from 'react'
import { banner1, freedelivery, gallery1, gallery2, paymentImage, headphone, cashback, service1,
     service2 , service3, service4} from '../assets/image/indexes'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <section class="banner-sec">
        <div class="container-fluid">
            <img src={banner1} alt=""/>
            <div class="header-main">
                <h4>Sale Upto 30% Off/-</h4>
                <h1>Furniture Collection <span>Your Home Comfy</span></h1>
                <p>"Discover the perfect blend of style, comfort, and functionality with our modern furniture collection. Designed to elevate your living spaces, our pieces embody timeless elegance and contemporary aesthetics, offering solutions for every room in your home. Transform your house into a sanctuary of modern design with furniture that reflects your unique taste and lifestyle.</p>
                <button type="button" class="btn btn-nav  ">Shop All </button>
                <Link to='/products'><button type="button" class="btn btn-nav m-2 bg-dark ">View More</button></Link>
            </div>
        </div>
    </section>

    <div class=" icon-boxes mt-3">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="icon-box">
                        <img src={freedelivery} alt=""/>
                        <h6>Free Shipping & Returning</h6>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="icon-box">
                        <img src={paymentImage} alt=""/>
                        <h6>Secure Payments</h6>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="icon-box">
                        <img src={headphone} alt=""/>
                        <h6>Customer Services</h6>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="icon-box">
                        <img src={cashback} alt=""/>
                        <h6>Maney Back Guarentee</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="py-5 product-sec">
        <div class="container">
            <div class="title text-center w-75 mx-auto">
                <h6>Products</h6>
                <h2>Exclusive <span>Products</span></h2>
            </div>
            <div class="row mt-4">
                <div class="col-md-3">
                    <div class="product-box">
                        <div class="pr-img"><img src={service1} alt=""/></div>
                        <div class="pr-icon">
                            <ul>
                                <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                            </ul>
                        </div>
                        <div class="pr-txt">
                            <h5>Gather Sofa</h5>
                            <span class="price">Kshs. 14,000</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="product-box">
                        <div class="pr-img"><img src={service2} alt=""/></div>
                        <div class="pr-icon">
                            <ul>
                                <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                            </ul>
                        </div>
                        <div class="pr-txt">
                            <h5>Commodo Furniture</h5>
                            <span class="price">Kshs. 25,000</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="product-box">
                        <div class="pr-img"><img src={service3} alt=""/></div>
                        <div class="pr-icon">
                            <ul>
                                <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                            </ul>
                        </div>
                        <div class="pr-txt">
                            <h5>Dining Chair</h5>
                            <span class="price">Kshs. 65,000</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="product-box">
                        <div class="pr-img"><img src={service4} alt=""/></div>
                        <div class="pr-icon">
                            <ul>
                                <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                            </ul>
                        </div>
                        <div class="pr-txt">
                            <h5>Natural wood</h5>
                            <span class="price">Kshs.21,000</span>
                        </div>
                    </div>
                    <Link to='/products'><button type="button" class="btn btn-nav bg-dark ">View More</button> </Link>
                    
                </div>
                  
            </div>
            
        </div>
    </section>
    

</>
  )
}

export default Hero