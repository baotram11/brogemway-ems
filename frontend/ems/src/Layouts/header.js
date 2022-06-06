import React from 'react';
import { BsPlusLg, BsCartPlus, BsCartCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { IoSearchOutline, IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from 'react-icons/md';

const Products = require('../Database/Products.json');

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

});

export default function Header() {
  return (
    <div className="Header">
      {/* Navigation*/}
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="/">
            BROGEMWAY
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars ms-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/products">
                  Sản phẩm
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/term">
                  Điều khoản
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  Về chúng tôi
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link icon" href="/infoAccount">
                  <AiOutlineUser size={20} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/search">
                  <IoSearchOutline size={20} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/favorite">
                  <IoHeartOutline size={20} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/cart">
                  <MdOutlineShoppingBag size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead">
      </header>

      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase mb-3 mt-5">Sản phẩm</h2>
            <h3 class="section-subheading text-muted mb-4">Bao gồm các sản phẩm thuộc thiết bị số, thời trang, giày và túi xách</h3>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
              {/* <!-- Portfolio item 1--> */}
              <div class="portfolio-item">
                <a class="portfolio-link" href="/products">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><BsPlusLg size={56} /></div>
                  </div>
                  <img class="img-fluid" src={require(`../Assets/Images/portfolio/1.png`)} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Thiết bị số</div>
                  <div class="portfolio-caption-subheading text-muted">Điện thoại, máy tính</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              {/* <!-- Portfolio item 2--> */}
              <div class="portfolio-item">
                <a class="portfolio-link" href="/products">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><BsPlusLg size={56} /></div>
                  </div>
                  <img class="img-fluid" src={require(`../Assets/Images/portfolio/2.png`)} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Giày tây</div>
                  <div class="portfolio-caption-subheading text-muted">Giày tây nam</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              {/* <!-- Portfolio item 3--> */}
              <div class="portfolio-item">
                <a class="portfolio-link" href="/products">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><BsPlusLg size={56} /></div>
                  </div>
                  <img class="img-fluid" src={require(`../Assets/Images/portfolio/3.png`)} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Túi xách</div>
                  <div class="portfolio-caption-subheading text-muted">Túi xách thời trang</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              {/* <!-- Portfolio item 4--> */}
              <div class="portfolio-item">
                <a class="portfolio-link" href="/products">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><BsPlusLg size={56} /></div>
                  </div>
                  <img class="img-fluid" src={require(`../Assets/Images/portfolio/4.png`)} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Áo</div>
                  <div class="portfolio-caption-subheading text-muted">Áo thun, áo sơ mi, áo khoác</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              {/* <!-- Portfolio item 5--> */}
              <div class="portfolio-item">
                <a class="portfolio-link" href="/products">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><BsPlusLg size={56} /></div>
                  </div>
                  <img class="img-fluid" src={require(`../Assets/Images/portfolio/5.png`)} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Quần</div>
                  <div class="portfolio-caption-subheading text-muted">Quần tây, quần jean</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              {/* <!-- Portfolio item 6--> */}
              <div class="portfolio-item">
                <a class="portfolio-link" href="/products">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><BsPlusLg size={56} /></div>
                  </div>
                  <img class="img-fluid" src={require(`../Assets/Images/portfolio/6.png`)} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Giày thể thao</div>
                  <div class="portfolio-caption-subheading text-muted">Giày thể thao nam, nữ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section bg-light" id="trending">
        <div class="container">

          <div class="text-center">
            <h2 class="section-heading text-uppercase mb-3 mt-5">Trending</h2>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                {/* Carousel indicators */}
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                {/* Wrapper for carousel items */}
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                      {Products.map((product) => (
                        <div key={product.ProID} class="col-sm-3" >
                          <a class="trending-link" href={`/infoProduct/${product.ProID}`}>
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src={require(`../Assets/Images/products/${product.ProID}/1.png`)} class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Apple iPad</h4>
                                <p class="item-price">{product.Price}</p>
                              </div>
                            </div>
                          </a>
                          <span class="cart-icon  m-0 d-inline-flex justify-content-start"><BsCartPlus /></span>
                          <span class="wish-icon  m-0 d-inline-flex justify-content-end"><IoHeartOutline /></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
