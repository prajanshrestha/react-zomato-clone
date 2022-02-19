import React, { useState } from "react";
import Header from "../../components/commonComponent/header/Header";
import TabOptions from "../../components/commonComponent/tabOptions/TabOptions";
import Footer from "../../components/commonComponent/footer/Footer";
import Delivery from "../../components/uncommonComponent/delivery/Delivery";
import DiningOut from "../../components/uncommonComponent/diningOut/DiningOut";
import NightLife from "../../components/uncommonComponent/nightLife/NightLife";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getCorrectScreen = (tabOption) => {
    switch (tabOption) {
      case "Delivery":
        return <Delivery />;
      case "Dining Out":
        return <DiningOut />;
      case "Night Life":
        return <NightLife />;
      default:
        return <Delivery />;
    }
  };

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
}
