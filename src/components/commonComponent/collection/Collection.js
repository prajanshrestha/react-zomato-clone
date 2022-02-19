import React from "react";
import Slider from "react-slick";
import "./Collection.css";
import NextArrow from "../carousel/NextArrow";
import PreviousArrow from "../carousel/PreviousArrow";

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  previousArrow: <PreviousArrow />,
};

export default function Collection({ list }) {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Nepalgunj, based on trends
          </div>
          <div className="collection-location">
            <div>All collections in Nepalgunj</div>
            <i className="fi fi-rr-caret-right absolute-center"></i>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => {
            return (
              <div key={item.id}>
                <div className="collection-cover">
                  <img
                    src={item.cover}
                    className="collection-image"
                    alt={item.title}
                  />
                  <div className="gradient-bg"></div>
                  <div className="collection-card-title">{item.title}</div>
                  <div className="collection-card-subtitle">
                    <div>{item.places}</div>
                    <i className="fi fi-rr-caret-right absolute-center"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
