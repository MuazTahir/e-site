// import React from 'react'
// import Link from 'next/link'
// const Navbar = () => {
//   return (
// <div>
// <nav >
//   <ul className='d-flex gap-5 bg-secondary pt-3 px-3 py-3'>
//   <Link href={"/"} className='text-decoration-none text-dark'>Home</Link>
//          <Link  href={"/aboutus"}className='text-decoration-none text-dark'>About Us</Link>

//            <Link  href={"/createProduct"} className='text-decoration-none text-dark'>CreateAdd </Link>
//   </ul>
// </nav>
  
// </div>

// )
// }

// export default Navbar


import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">MyWebsite</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link text-dark">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/aboutus" className="nav-link text-dark">About Us</Link>
              </li>
              <li className="nav-item">
                <Link href="/createProduct" className="nav-link text-dark">Add Product</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
