import React from "react";
import NextArrow from "../../../commonComponent/carousel/NextArrow";
import PreviousArrow from "../../../commonComponent/carousel/PreviousArrow";
import "./DeliveryCollections.css";
import Slider from "react-slick";
import DeliveryItem from "../deliveryItem/DeliveryItem";

const deliveryItems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18798800/7c9f7c11939dcfdf4602edaa44329167_o2_featured_v2.jpg",
  },
  {
    id: 2,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18798800/7c9f7c11939dcfdf4602edaa44329167_o2_featured_v2.jpg",
  },
  {
    id: 3,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18798800/7c9f7c11939dcfdf4602edaa44329167_o2_featured_v2.jpg",
  },
  {
    id: 4,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18798800/7c9f7c11939dcfdf4602edaa44329167_o2_featured_v2.jpg",
  },
  {
    id: 5,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18798800/7c9f7c11939dcfdf4602edaa44329167_o2_featured_v2.jpg",
  },
  {
    id: 6,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18798800/7c9f7c11939dcfdf4602edaa44329167_o2_featured_v2.jpg",
  },
  {
    id: 7,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18798800/7c9f7c11939dcfdf4602edaa44329167_o2_featured_v2.jpg",
  },
  {
    id: 8,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18798800/7c9f7c11939dcfdf4602edaa44329167_o2_featured_v2.jpg",
  },
  {
    id: 9,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18798800/7c9f7c11939dcfdf4602edaa44329167_o2_featured_v2.jpg",
  },
  {
    id: 10,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/0/18798800/7c9f7c11939dcfdf4602edaa44329167_o2_featured_v2.jpg",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  previousArrow: <PreviousArrow />,
};

export default function DeliveryCollections() {
  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((deliveryItem) => {
            return <DeliveryItem deliveryItem={deliveryItem} key={deliveryItem.id} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
