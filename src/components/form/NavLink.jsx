/** @format */

import React from "react";
import { smoothScroll } from "../../utils/smoothScroll";

const NavLink = ({ href, children, className = "", onClick, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    smoothScroll(targetId);
    if (onClick) onClick(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${className}`}
      {...props}>
      {children}
    </a>
  );
};

export default NavLink;
