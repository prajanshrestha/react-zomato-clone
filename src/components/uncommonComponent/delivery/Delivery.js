import React from "react";
import ExploreSection from "../../commonComponent/exploreSection/ExploreSection";
import Filter from "../../commonComponent/filter/Filter";
import DeliveryCollections from "./deliveryCollections/DeliveryCollections";
import TopBrands from "./topBrands/TopBrands";
import { restaurants } from "../../../data/restaurants";
import ExploreMenu from "../../commonComponent/exploreSection/exploreCard/ExploreMenu";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    icon: <i className="fi fi-rr-angle-small-down absolute-center"></i>,
    title: "Cuisine",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;

export default function Delivery() {
  return (
    <div>
      <div className="max-width">
        {/* <Filter filterList={deliveryFilters} /> */}
      </div>
      {/* <DeliveryCollections /> */}
      {/* <TopBrands /> */}

      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restaurants in Nepalgunj"
      />
    </div>
  );
}
