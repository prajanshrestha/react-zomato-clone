import React from "react";
import "./ExploreCard.css";
import Menu from "./Menu";

export default function RestaurantMenu({ list, collectionName }) {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurant) => {
          return <Menu key={restaurant.info.resId} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
}
