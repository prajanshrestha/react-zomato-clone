import React, { useState, useEffect } from "react";
import "./Count.css";

export default function Count() {
  const [count, setCount] = useState(window.localStorage.getItem("counts"));

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem("counts")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("counts", count);
  }, [count]);

  return (
    <div>
      <span className="buttons">
        <i
          className="fi fi-rr-minus-small absolute-center"
          onClick={() => {
            if (count <= 0) {
              setCount(0);
            } else {
              setCount(count - 1);
            }
          }}
        ></i>
        <span className="number absolute-center">{count}</span>
        <i
          className="fi fi-rr-plus-small absolute-center"
          onClick={() => {
            setCount(count + 1);
          }}
        ></i>
      </span>
    </div>
  );
}
