import React from "react";
import RestaurantActive from "../../../images/restaurantActive.png";
import RestaurantInactive from "../../../images/restaurantInactive.png";
import CloudKitchenActive from "../../../images/cloudKitchenActive.png";
import CloudKitchenInactive from "../../../images/cloudKitchenInactive.png";
import "./TabOptions.css";

const tabs = [
  {
    id: 1,
    name: "Restaurants",
    activeImage: RestaurantActive,
    inactiveImage: RestaurantInactive,
    backdrop: "#FCEEC0",
  },
  {
    id: 2,
    name: "Cloud Kitchen",
    activeImage: CloudKitchenActive,
    inactiveImage: CloudKitchenInactive,
    backdrop: "#E5F3F3",
  },
];

export default function TabOptions({ activeTab, setActiveTab }) {
  return (
    <div className="tab-options-bg">
      <div className="tab-options">
        <div className="max-width options-wrapper">
          {tabs.map((tab) => {
            return (
              <div key={tab.id}>
                <div
                  onClick={() => setActiveTab(tab.name)}
                  className={`tab-item absolute-center cursor-pointer ${
                    activeTab === tab.name && "active-tab"
                  }`}
                >
                  <div
                    className="tab-image-container absolute-center"
                    style={{
                      backgroundColor: `${
                        activeTab === tab.name ? tab.backdrop : ""
                      }`,
                    }}
                  >
                    <img
                      className="tab-image"
                      alt={tab.name}
                      src={
                        activeTab === tab.name
                          ? tab.activeImage
                          : tab.inactiveImage
                      }
                    />
                  </div>
                  <div className="tab-name">{tab.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
