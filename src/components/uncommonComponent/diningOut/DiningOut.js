import React from "react";
import Collection from "../../commonComponent/collection/Collection";
import { diningOut } from "../../../data/diningOut";
import Filter from "../../commonComponent/filter/Filter";
import ExploreSection from "../../commonComponent/exploreSection/ExploreSection";

const collectionList = [
  {
    id: 1,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "30 places",
  },
  {
    id: 2,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "30 places",
  },
  {
    id: 3,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "30 places",
  },
  {
    id: 4,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "30 places",
  },
  {
    id: 5,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "30 places",
  },
  {
    id: 6,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "30 places",
  },
  {
    id: 7,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "30 places",
  },
  {
    id: 8,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "30 places",
  },
  {
    id: 9,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "30 places",
  },
  {
    id: 10,
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    places: "30 places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    title: "Distance",
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Online Bookings",
  },
  {
    id: 5,
    icon: <i className="fi fi-rr-angle-small-down absolute-center"></i>,
    title: "Cuisines",
  },
  {
    id: 6,
    icon: <i className="fi fi-rr-angle-small-down absolute-center"></i>,
    title: "Pro Offers",
  },
  {
    id: 7,
    title: "Outdoor Seating",
  },
  {
    id: 8,
    title: "Serves Alcohol",
  },
  {
    id: 9,
    title: "Pure Veg",
  },
  {
    id: 10,
    title: "Open Now",
  },
  {
    id: 11,
    icon: <i className="fi fi-rr-angle-small-down absolute-center"></i>,
    title: "More Filters",
  },
  {
    id: 12,
    title: "Cafes",
  },
];

const diningList = diningOut;

export default function DiningOut() {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filter filterList={diningFilters} />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="Dine-Out Restaurants in NepalGunj"
      />
    </div>
  );
}
