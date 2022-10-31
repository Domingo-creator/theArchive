import React, { useState, useEffect } from "react";
import "../../../styles/product_show/size_and_color.css";
import WhatsMySize from "./whats_my_size";

const SizeAndColor = ({ jean }) => {
  const [chosenColor, setChosenColor] = useState(
    // jean?.Color_Group_Taxonomy_US ||
    false
  ); // initialized false to avoid controlled component warning. will become int
  const [expandOptions, setExpandOptions] = useState(false);

  const updateChosenColor = (e) => setChosenColor(e.target.value);
  const toggleExpandOptions = () => setExpandOptions(!expandOptions);

  const chevronDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-down"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        stroke="black"
        stroke-width="1"
      />
    </svg>
  );

  const chevronUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-chevron-up"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        stroke="black"
        stroke-width="1"
      />
    </svg>
  );

  //colors -- will probably come from database later
  const colorOptions = [
    {
      name: "Dark Stonewash - Non Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005054886-swatch?$swatch$",
    },
    {
      name: "Light Stonewash - Non Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005054834-swatch?$swatch$",
    },
    {
      name: "Native Cali - Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005051469-swatch?$swatch$",
    },
    {
      name: "Nail Loop Knot - Dark Wash - Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005052195-swatch?$swatch$",
    },
    {
      name: "Ocean Blues - Medium Wash - Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005052378-swatch?$swatch$",
    },
    {
      name: "Black - Non Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005050260-swatch?$swatch$",
    },
    {
      name: "Flying Bird - Dark Wash - Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005051455-swatch?$swatch$",
    },
    {
      name: "Medium Stonewash - Non Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005054891-swatch?$swatch$",
    },
    {
      name: "Goldenrod - Dark Wash - Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005051994-swatch?$swatch$",
    },
    {
      name: "Rinse - Dark Wash - Non Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005050216-swatch?$swatch$",
    },
    {
      name: "Fremont Drop Shot - Medium Wash - Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005052217-swatch?$swatch$",
    },
    {
      name: "Shooting Star - Light Wash - Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005051992-swatch?$swatch$",
    },
    {
      name: "Kansas - Grey - Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005051594-swatch?$swatch$",
    },
    {
      name: "Clif Dark Wash - Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005051456-swatch?$swatch$",
    },
    {
      name: "Durian Dark Wash - Stretch",
      image: "https://lsco.scene7.com/is/image/lsco/005051989-swatch?$swatch$",
    },
  ];
  //

  return (
    <div className="color-radio-container">
      <p>{chosenColor ? colorOptions[chosenColor].name : ""}</p>
      <div className="color-radio-inner-container">
        <div
          onChange={(e) => updateChosenColor(e)}
          className={`color-radio ${expandOptions ? "wrap" : ""}`}
        >
          {colorOptions.map((colorOption, index) => {
            return (
              <label>
                <input
                  type="radio"
                  value={index}
                  checked={
                    chosenColor &&
                    colorOptions[chosenColor].name == colorOption.name
                  }
                  name="color"
                />
                <img src={colorOption.image}></img>
              </label>
            );
          })}
        </div>
        <label className="expand-options-checkbox">
          <input
            type="checkbox"
            onClick={toggleExpandOptions}
            checked={expandOptions}
          ></input>
          {expandOptions ? chevronUp : chevronDown}
        </label>
      </div>
    </div>
  );
};

export default SizeAndColor;
