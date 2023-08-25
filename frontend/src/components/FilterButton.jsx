import React from "react"

const FilterButton = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      style={{ fontWeight: active ? "bold" : "normal" }}
    >
      {label}
    </button>
  )
}

export default FilterButton
