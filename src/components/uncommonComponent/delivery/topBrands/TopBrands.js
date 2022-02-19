import React from "react";
import Slider from "react-slick";
import NextArrow from "../../../commonComponent/carousel/NextArrow";
import PreviousArrow from "../../../commonComponent/carousel/PreviousArrow";
import "./TopBrands.css";

const topBrandsList = [
  {
    id: 1,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
  {
    id: 2,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
  {
    id: 3,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
  {
    id: 4,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
  {
    id: 5,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
  {
    id: 6,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
  {
    id: 7,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
  {
    id: 8,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
  {
    id: 9,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
  {
    id: 10,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  previousArrow: <PreviousArrow />,
};

export default function TopBrands() {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((topBrand) => {
          return (
            <div key={topBrand.id}>
              <div className="top-brands-cover">
                <img
                  src={topBrand.cover}
                  className="top-brands-image"
                  alt={topBrand.time}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
