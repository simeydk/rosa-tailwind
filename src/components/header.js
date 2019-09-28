import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

// import Img from "gatsby-image";

const textAf = {
  home: "Tuis",
  about: "Oor Ons",
  rooms: "Kamers",
  services: "Dienste",
  gallery: "Galery",
  seeAndDo: "Om Te Sien",
  contact: "Kontak",
  bookNow: "Bespreek Nou",
}

const textEn = {
  home: "Home",
  about: "About",
  rooms: "Rooms",
  services: "Services",
  gallery: "Gallery",
  seeAndDo: "See & Do",
  contact: "Contact",
  bookNow: "Book Now",
}

const textDict = {
  'en': textEn,
  'af': textAf,
}

function Header({lang='en' }) {
  const [isExpanded, toggleExpansion] = useState(false);

  const text = textDict[lang]

  return (
    <nav className="bg-gray-900 relative">
      <div className="flex flex-wrap items-spread justify-between max-w-4xl mx-auto px-2 py-4 md:p-6">

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
            } md:block flex md:items-center w-full justify-between`}
        >
          <div className="text-sm uppercase" style={{ fontWeight: 500 }}>
            <NavItem label={text["home"]} href="/" style={{ color: "#555" }} />
            <NavItem label={text["about"]} href="/#about" />
            <NavItem label={text["rooms"]} href="/#rooms" />
            <NavItem label={text["services"]} href="/#services" />
            <NavItem label={text["gallery"]} href="/#gallery" />
            <NavItem label={text["seeAndDo"]} href="/#seeDo" />
            <NavItem label={text["contact"]} href="/#contact" />
            <NavItem label={text["bookNow"]} href="https://www.nightsbridge.co.za/bridge/book?bbid=23656" className="border p-2" external />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ label, href, className, style, external }) {
  if (external) {
    return (
      <a
        className={"block md:inline-block mt-4 mr-8 md:mt-0 no-underline text-white " + className}
        style={style}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    )
  } else {
    return (
      <Link
        to={href}
        className={"block md:inline-block mt-4 mr-8 md:mt-0 no-underline text-white " + className}
        style={style}
      >
        {label}
      </Link>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
