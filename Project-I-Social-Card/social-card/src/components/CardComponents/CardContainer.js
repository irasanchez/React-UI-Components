import React from "react";
import "./Card.css";

const CardContainer = () => {
  return (
    <card className="card-container">
      <CardBanner />
      <CardContent />
    </card>
  );
};

export default CardContainer;
