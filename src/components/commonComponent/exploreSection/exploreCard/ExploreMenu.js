import React from "react";
import "./ExploreCard.css";
import RestaurantMenu from "./RestaurantMenu";
import { restaurants } from "../../../../data/restaurants";

const restaurantList = restaurants;

export default function ExploreMenu() {
  return (
    <div className="max-width explore-section">
      <RestaurantMenu list={restaurantList} collectionName="The Restaurants" />
    </div>
  );
}
