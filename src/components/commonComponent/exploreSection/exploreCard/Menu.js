import React from "react";
import "./ExploreCard.css";
import Count from "./Count"

export default function ExploreCard({ restaurant }) {
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? "";
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOffers = restaurant?.gold?.text;
  const proOffers = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className="explore-card cursor-pointer">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliveryTime}</div>
        {proOffers && <div className="pro-offers">{proOffers}</div>}
        {goldOffers && (
          <div className="gold-offers absolute-center">{goldOffers}</div>
        )}
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name} </div>
        {rating && (
          <div className="res-rating absolute-center">
            {/* {rating} <i className="fi fi-rr-star absolute-center"></i> */}
            <Count />
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, index) => {
              return (
                <span className="res-cuisine-tag" key={item}>
                  {item}
                  {index !== cuisines.length - 1 && ","}
                </span>
              );
            })}
          </div>
        )}
        {approxPrice && <div className="approx-price">{approxPrice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
}
