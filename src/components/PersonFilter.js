import React from "react";

const PersonFilter = ({ setNameFilter, nameFilter }) => {
  return (
    <div>
      filter shown with:
      <input
        onChange={(e) => setNameFilter(e.target.value)}
        value={nameFilter}
      />
    </div>
  );
};
export default PersonFilter;
