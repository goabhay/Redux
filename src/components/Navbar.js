import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const data = useSelector((state) => state.cart);

  return (
    <div className="sticky top-0 z-40">
      <div className="navbar bg-base-100  bg-slate-200 drop-shadow-lg">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">Ecommerce</a>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">My Cart {data.length} </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
