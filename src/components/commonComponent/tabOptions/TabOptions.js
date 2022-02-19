import React from "react";
import DeliveryActive from "../../../images/deliveryActive.png";
import DeliveryInactive from "../../../images/deliveryInactive.png";
import NightLifeActive from "../../../images/nightLifeActive.png";
import NightLifeInactive from "../../../images/nightLifeInactive.png";
import DiningOutActive from "../../../images/diningOutActive.png";
import DiningOutInactive from "../../../images/diningOutInactive.png";
import "./TabOptions.css";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    activeImage: DeliveryActive,
    inactiveImage: DeliveryInactive,
    backdrop: "#FCEEC0",
  },
  {
    id: 2,
    name: "Dining Out",
    activeImage: DiningOutActive,
    inactiveImage: DiningOutInactive,
    backdrop: "#E5F3F3",
  },
  {
    id: 3,
    name: "Night Life",
    activeImage: NightLifeActive,
    inactiveImage: NightLifeInactive,
    backdrop: "#EDf4FF",
  },
];

export default function TabOptions({ activeTab, setActiveTab }) {
  return (
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
  );
}
