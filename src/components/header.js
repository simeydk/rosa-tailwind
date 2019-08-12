import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-teal-700 relative">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-2 md:p-4">
        <Link to="/" className="flex items-center no-underline text-white">
          <img
            src='https://static.wixstatic.com/media/84803a_048a1807f9a54346a31824a6217c45c3~mv2_d_3508_2480_s_4_2.png/v1/fill/w_900,h_638,al_c,q_85,usm_0.66_1.00_0.01/84803a_048a1807f9a54346a31824a6217c45c3~mv2_d_3508_2480_s_4_2.webp' 
            alt="Rosa B&B Logo" 
            className="bg-white"
            style={{width:'200px', position:"absolute", top: "10px"}}
            />
          {/* <h1 className="font-bold text-xl tracking-tight">Rosa B&B</h1> */}
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-sm">
            <NavItem label="Home" href="/" />
            <NavItem label="About" href="/#about" />
            <NavItem label="Rooms" href="/#rooms" />
            <NavItem label="Services" href="/#services" />
            <NavItem label="Gallery" href="/#gallery" />
            <NavItem label="See & Do" href="/#seeDo" />
            <NavItem label="Contact" href="/#contact" />
            <NavItem label="Book Now" href="/#book" className="border p-2" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ label, href, className}) {
  return (
    <Link
      to={href}
      className={"block md:inline-block mt-4 mr-6 md:mt-0 no-underline text-white " + className}
    >
      {label}
    </Link>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
