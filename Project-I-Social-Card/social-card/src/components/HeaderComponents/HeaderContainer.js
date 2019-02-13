import React from "react";
import "./Header.css";

import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => {
  return (
    <header className="header-container">
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </header>
  );
};

export default HeaderContainer;
