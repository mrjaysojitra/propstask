import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/blogs">blogs</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/contact">contact</Link>
      </li>
    
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header;