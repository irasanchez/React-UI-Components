import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <card className="card-container">
      <CardBanner />
      <CardContent />
    </card>
  );
};

export default CardContainer;
