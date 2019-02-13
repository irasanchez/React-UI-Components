import React from "react";
import "./Header.css";

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
