import React from "react";
import Collection from "../../commonComponent/collection/Collection";
import Filter from "../../commonComponent/filter/Filter";
import { nightLife } from "../../../data/nightLife";
import ExploreSection from "../../commonComponent/exploreSection/ExploreSection";

const collectionList = [
  {
    id: 1,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "16 places",
  },
  {
    id: 2,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "16 places",
  },
  {
    id: 3,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "16 places",
  },
  {
    id: 4,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "16 places",
  },
  {
    id: 5,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "16 places",
  },
  {
    id: 6,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "16 places",
  },
  {
    id: 7,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "16 places",
  },
  {
    id: 8,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "16 places",
  },
  {
    id: 9,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "16 places",
  },
  {
    id: 10,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "16 places",
  },
];

const nightFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    icon: <i className="fi fi-rr-angle-small-down absolute-center"></i>,
    title: "Pro Offers",
  },
  {
    id: 3,
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    title: "Distance",
  },
  {
    id: 4,
    title: "Rating: 4.0+",
  },
  {
    id: 5,
    title: "Pubs & Bars",
  },
];

const nightList = nightLife;

export default function NightLife() {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filter filterList={nightFilters} />
      </div>
      <ExploreSection
        list={nightList}
        collectionName="Nightlife Restaurants in Nepalgunj"
      />
    </div>
  );
}
