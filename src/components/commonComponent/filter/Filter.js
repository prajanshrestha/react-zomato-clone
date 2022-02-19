import React from "react";
import "./Filter.css";
import FilterItem from "./filterItem/FilterItem";

export default function Filter({ filterList }) {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })}
    </div>
  );
}
