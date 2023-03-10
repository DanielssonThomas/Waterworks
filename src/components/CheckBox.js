import React, { useState } from "react";

const CheckBox = (props) => {
  const [checkedItems, setCheckedItems] = useState([]); // initialize an empty array to store checked items

  const handleChange = (e) => {
    // update the checked items state
    const isChecked = e.target.checked;
    const value = e.target.value;
    const updatedCheckedItems = [...checkedItems];
    if (isChecked) {
      updatedCheckedItems.push(value);
    } else {
      const index = updatedCheckedItems.indexOf(value);
      if (index > -1) {
        updatedCheckedItems.splice(index, 1);
      }
    }
    setCheckedItems(updatedCheckedItems);
    props.handleCheckboxes(updatedCheckedItems);
  };

  return (
    <div className="contentWrapper">
      <label>
        <input
          type="checkbox"
          name="Station 1"
          value="1"
          onChange={handleChange}
        />
        Arketjärn
      </label>
      <label>
        <input
          type="checkbox"
          name="Station 2"
          value="2"
          onChange={handleChange}
        />
        Eriksberg
      </label>
      <label>
        <input
          type="checkbox"
          name="Station 3"
          value="3"
          onChange={handleChange}
        />
        Gårda dämme
      </label>
      <label>
        <input
          type="checkbox"
          name="Station 4"
          value="4"
          onChange={handleChange}
        />
        Härsjö dämme
      </label>
    </div>
  );
};

export default CheckBox;
