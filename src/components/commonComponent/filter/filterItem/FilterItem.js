import React from "react"
import "./FilterItem.css"

export default function FilterItem({filter}){
    return(
        <div className="filter-item">
            {filter.icon && filter.icon}
            <div className="filter-name">{filter.title}</div>
        </div>
    )
}