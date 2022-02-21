import React from "react";
import "./ExploreCard.css";
import { useNavigate } from "react-router-dom";

export default function ExploreCard({ restaurant }) {
  const name = "Kitchen Top";
  const coverImg = restaurant?.info?.image?.url;
  const price = "NRP 500";
  const offers = "";
  const address = "Karkando Nepalgunj";
  const discount = "15%";
  
  let navigate = useNavigate();
  const goToExploreMenu = () => {
    let path = `exploreMenu`;
    navigate(path);
  };

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
        <div className="res-rating absolute-center" onClick={goToExploreMenu}>
          See Menu
        </div>
      </div>
      <div className="res-row">
        <div className="res-address">{address}</div>
      </div>
    </div>
  );
}
