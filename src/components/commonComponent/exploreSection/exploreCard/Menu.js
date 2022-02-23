import React from "react";
import "./ExploreCard.css";
import { useNavigate } from "react-router-dom";
import Count from "./Count";

export default function ExploreCard({ restaurant }) {
  const name = "Kitchen Top";
  const coverImg = restaurant?.info?.image?.url;
  const price = "NRP 500";
  const offers = "";

  const address = "Karkando Nepalgunj";
  const discount = "15%";
  let navigate = useNavigate();

  return (
    <div className="explore-card cursor-pointer">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{price}</div>
        {discount && (
          <div className="discount absolute-center">{discount} Discount</div>
        )}
      </div>
      <div className="res-row">
        <div className="res-name">{name} </div>
        <div className="res-rating absolute-center">
          <Count />
        </div>
      </div>
    </div>
  );
}
