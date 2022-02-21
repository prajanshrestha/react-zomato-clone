import React, { useState } from "react";
import TabOptions from "../../components/commonComponent/tabOptions/TabOptions";

import Delivery from "../../components/uncommonComponent/delivery/Delivery";
import DiningOut from "../../components/uncommonComponent/diningOut/DiningOut";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Restaurants");
  const getCorrectScreen = (tabOption) => {
    switch (tabOption) {
      case "Restaurants":
        return <Delivery />;
      case "Cloud Kitchen":
        return <DiningOut />;
      default:
        return <Delivery />;
    }
  };

  return (
    <div>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
    </div>
  );
}
