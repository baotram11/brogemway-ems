import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { IoSearchOutline, IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from 'react-icons/md';

import './NavBar.scss';

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

export default function Navbar() {
  return (
    <div className="Header">

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
                <a class="nav-link icon" href="/login">
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
    </div>
  );
}
