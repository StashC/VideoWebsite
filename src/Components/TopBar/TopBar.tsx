import React, { useState } from "react";

import "./TopBar.css";
import { scrollTo } from "../../helper.ts";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((cur) => !cur);
  };

  return (
    <div className="TopBar">
      <h2 className="TopBarName">Your Name</h2>
      <div className={`TopBarLinkContainer ${isOpen ? "Open" : ""}`}>
        <a className="TopBarLink" onClick={() => scrollTo("PersonalProfile")}>
          Home
        </a>
        <a className="TopBarLink" onClick={() => scrollTo("PersonalProfile")}>
          About
        </a>
        <a className="TopBarLink" onClick={() => scrollTo("ProjectGallery")}>
          Projects
        </a>
        <a
          aria-label="Email"
          className="TopBarLink"
          onClick={() => scrollTo("ContactCard")}
        >
          Contact
        </a>
      </div>
      <div className="NavToggle" onClick={toggleOpen}>
        &#9776;
      </div>
    </div>
  );
};
export default TopBar;
