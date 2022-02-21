import React, { useState } from "react";
import Header from "../../components/commonComponent/header/Header";
import TabOptions from "../../components/commonComponent/tabOptions/TabOptions";
import Footer from "../../components/commonComponent/footer/Footer";
import Delivery from "../../components/uncommonComponent/delivery/Delivery";
import DiningOut from "../../components/uncommonComponent/diningOut/DiningOut";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Restaurants");
  const [abc, setAbc] = useState("123");

  const getCorrectScreen = (tabOption) => {
    switch (tabOption) {
      case "Restaurants":
        return (
          <Delivery exploreSection="exploreSection" exploreMenu="exploreMenu" />
        );
      case "Cloud Kitchen":
        return <DiningOut />;
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
