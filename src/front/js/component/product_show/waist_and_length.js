import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import "../../../styles/product_show/waist_and_length.css";
import { Context } from "../../store/appContext";

export const WaistAndLength = ({
  product,
  model = { height: `5'9"`, waist: "27" },
}) => {
  const { store, actions } = useContext(Context);
  // const pc9 = store.pc9[0]?.pc9Input;

  console.log(store);
  console.log(product.Fit);
  const [length, setLength] = useState(store.length[0]);
  const [waistSize, setWaistSize] = useState(
    !("Fit" in product)
      ? store.waist[0]
      : product.Fit == "true to size"
      ? store.waist[0]
      : product.Fit == "runs big"
      ? parseInt(store.waist[0]) - 1
      : product.Fit == "runs small"
      ? parseInt(store.waist[0]) + 1
      : "true to size"
  );

  // Selection Choices
  const waistSizeOptions = [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
  const lengthOptions = [26, 28, 30];
  //

  const updateWaistSize = (e) => setWaistSize(e.target.value);
  const updateLength = (e) => setLength(e.target.value);

  return (
    <div className="waist-length-container">
      <label for="waist-size">Waist</label>
      <div onChange={(e) => updateWaistSize(e)} className="size-radio">
        {waistSizeOptions.map((sizeOption) => {
          return (
            <label>
              <input
                type="radio"
                value={sizeOption}
                checked={waistSize == sizeOption}
                name="waistSize"
              />
              <div>{sizeOption}</div>
            </label>
          );
        })}
      </div>
      <label for="length">Length</label>
      <div onChange={(e) => updateLength(e)} className="size-radio">
        {lengthOptions.map((lengthOption) => {
          return (
            <label>
              <input
                type="radio"
                value={lengthOption}
                checked={length == lengthOption}
                name="length"
              />
              <div>{lengthOption}</div>
            </label>
          );
        })}
      </div>
      <div className="size-guide">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-chart-simple" />
          <span>Size Guide</span>
        </div>
        <p>
          <strong>Fit:</strong> Customers say{" "}
          {product ? ("Fit" in product ? product.Fit : "________") : "________"}
        </p>
        <p>
          Model is {model.height} wearing a size {model.waist} waist
        </p>
      </div>
    </div>
  );
};
