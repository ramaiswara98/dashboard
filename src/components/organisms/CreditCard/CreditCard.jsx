import React from "react";

import "./CreditCard.css";
import BGCard from "../../../assets/images/bg-card.png";
import Logo from "../../atoms/Logo/Logo";
import Visa from "../../../assets/images/visa.png";
import Label from "../../atoms/Label/Label";

function CreditCard({ cardDetails }) {
  return (
    <div
      style={{ backgroundImage: `url(${BGCard})` }}
      className="credit-card-container"
    >
      <div className="credit-card-top">
        <Logo color={"var(--white)"} />
        <img src={Visa} className="credit-card-visa" />
      </div>
      <div className="credit-card-bottom">
        <div className="credit-card-bottom-left">
          <Label color={"var(--white)"}>{cardDetails.number}</Label>
          <Label color={"var(--white)"}>{cardDetails.holder}</Label>
        </div>
        <div>
          <Label color={"var(--white)"}>{cardDetails.valid}</Label>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
