import React from "react";
import "./DeliveryItem.css";

export default function DeliveryItem({ deliveryItem }) {
  return (
    <div>
      <div className="delivery-item-cover">
        <img
          src={deliveryItem.cover}
          alt={deliveryItem.title}
          className="delivery-item-image"
        />
      </div>
      <div className="delivery-item-title">{deliveryItem.title}</div>
    </div>
  );
}
