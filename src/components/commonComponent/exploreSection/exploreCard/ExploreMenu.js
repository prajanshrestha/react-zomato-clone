import React from "react";
import "./ExploreCard.css";
import RestaurantMenu from "./RestaurantMenu";
import { restaurants } from "../../../../data/restaurants";
import Header from "../../header/Header";

const restaurantList = restaurants;

export default function ExploreMenu() {
  return (
    <div className="max-width explore-section">
      <Header />
      <RestaurantMenu list={restaurantList} collectionName="The Restaurants" />
    </div>
  );
}
