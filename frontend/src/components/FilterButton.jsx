import React from "react"
import "./FilterButton.css"

const FilterButton = ({ label, onClick, active }) => {
  return (
    <button
      id="btnfiltre"
      onClick={onClick}
      style={{ fontWeight: active ? "bold" : "lighter" }}
    >
      {label}
    </button>
  )
}

export default FilterButton
