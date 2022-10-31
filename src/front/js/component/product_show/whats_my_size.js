import React, { useState } from "react";
import "../../../styles/product_show/whats_my_size.css";

const WhatsMySize = () => {
  const [myGender, setMyGender] = useState();
  const [myHeightFt, setMyHeightFt] = useState();
  const [myHeightIn, setMyHeightIn] = useState();
  const [myHeightCm, setMyHeightCm] = useState();
  const [myWeight, setMyWeight] = useState();
  const [system, setSystem] = useState(0); // 0 for Imperial, 1 for metric

  const updateMyGender = (e) => setMyGender(e.target.value);
  const updateMyHeightFt = (e) => setMyHeightFt(e.target.value);
  const updateMyHeightIn = (e) => setMyHeightIn(e.target.value);
  const updateMyHeightCm = (e) => setMyHeightCm(e.target.value);
  const updateMyWeight = (e) => setMyWeight(e.target.value)
  const updateMySystem = (systemNum) => setSystem(systemNum);

  return (
    <div>
      <div className="whats-my-size-main">
        <div className="size-header">Select Your Size</div>
        <button
          type="button"
          className="whats-my-size-button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHFSURBVHgB7ZZNSAJBFIDfbEGHNIuOQUH0Q5CQRJZkouAxAiuE9NSxwFtCEpGePHXpYFej9Fgnu0QpKEEa9GNgP56EroHuXpTYbd+EouDP7qa3Pth9M8vMfLzHzO4CyEQQBC9ecuYQvI33aqzA8Pti19RqwnshT+NEn6bZqg8Mz++8cdwNdplJVb8FGOFKigD5zOVoHBoebjxIAB1PmOsxlcpMJTzwhyCDzHOaxvklY8uxhJADKhFT04EMkok4jTaHU8JoYv6VyOQ8FAY2n6eZ6I2ts1EkKYiCYCBA2y6PR9Ic2RLkJHBcyUaKSJEEs9nacNC2y7PbUtQ12NPjBQXgVkaZyWqlGak1/fCYSkGpWKwZ91Uq+hRLkKfUPRXp5uaoaHl9jZYxk07XSMi4uk+AP4IH8+wyUjmgmOVdPAEX4RCcRiIDbZGUsTkdsO12w8joaPXjYFslZWYNC7Bit8OMXg9TWu1mXUn0Jd3w3YSlsExrQSofbIEo2sJy6Ui5qulYJljuVaej0u+GDnDk90NS3MJl/svVlDrlUkfLX7B2I/7VxLIca2HEhg86RDeBPYxMluNiPAiLaIU2gWsJ32B4Zdlb7P8A/Iy2jlV/XfwAAAAASUVORK5CYII=" />
          <span>What's My Size?</span>
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHFSURBVHgB7ZZNSAJBFIDfbEGHNIuOQUH0Q5CQRJZkouAxAiuE9NSxwFtCEpGePHXpYFej9Fgnu0QpKEEa9GNgP56EroHuXpTYbd+EouDP7qa3Pth9M8vMfLzHzO4CyEQQBC9ecuYQvI33aqzA8Pti19RqwnshT+NEn6bZqg8Mz++8cdwNdplJVb8FGOFKigD5zOVoHBoebjxIAB1PmOsxlcpMJTzwhyCDzHOaxvklY8uxhJADKhFT04EMkok4jTaHU8JoYv6VyOQ8FAY2n6eZ6I2ts1EkKYiCYCBA2y6PR9Ic2RLkJHBcyUaKSJEEs9nacNC2y7PbUtQ12NPjBQXgVkaZyWqlGak1/fCYSkGpWKwZ91Uq+hRLkKfUPRXp5uaoaHl9jZYxk07XSMi4uk+AP4IH8+wyUjmgmOVdPAEX4RCcRiIDbZGUsTkdsO12w8joaPXjYFslZWYNC7Bit8OMXg9TWu1mXUn0Jd3w3YSlsExrQSofbIEo2sJy6Ui5qulYJljuVaej0u+GDnDk90NS3MJl/svVlDrlUkfLX7B2I/7VxLIca2HEhg86RDeBPYxMluNiPAiLaIU2gWsJ32B4Zdlb7P8A/Iy2jlV/XfwAAAAASUVORK5CYII=" />
              <button
                type="button"
                className="close-button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-header-text">
                <div>Enter your details</div>
                <div>to get your size, quick & easy.</div>
              </div>
              <div>
                <p>Gender</p>
                <div className="gender-options">
                  <label>
                    <input type="radio" name="gender" value={myGender} />
                    <div>Women</div>
                  </label>
                  <label>
                    <input type="radio" name="gender" value={myGender} />
                    <div>Men</div>
                  </label>
                </div>
              </div>
              <div className="measurements">
                <div>
                  <p>Height</p>
                  <input
                    className={system == 0 ? "half-width" : ""}
                    type="number"
                    value={system == 0 ? myHeightFt : myHeightCm}
                    min={system == 0 ? "3" : "30"}
                    max={system == 0 ? "9" : "500"}
                    placeholder={system == 0 ? "feet" : ""}
                  />
                  <input
                    className={system == 1 ? "hide" : "half-width"}
                    type="number"
                    value={myHeightIn}
                    min="0"
                    max="11"
                    placeholder="inches"
                  />
                  <div className="system-toggle-buttons">
                    <label>
                      <input
                        type="radio"
                        name="heightSystem"
                        checked={system == 0}
                        onChange={() => updateMySystem(0)}
                      />
                      <span className={system == 0 ? "bold" : ""}>in</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="heightSystem"
                        checked={system == 1}
                        onChange={() => updateMySystem(1)}
                      />
                      <span className={system == 1 ? "bold" : ""}>cm</span>
                    </label>
                  </div>
                </div>
                <div>
                  <p>Weight</p>
                  <input type="number" value={myWeight} min="0" max="1000" />
                  <div className="system-toggle-buttons">
                    <label>
                      <input
                        type="radio"
                        name="weightSystem"
                        checked={system == 0}
                        onChange={() => updateMySystem(0)}
                      />
                      <span className={system == 0 ? "bold" : ""}>lb</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="weightSystem"
                        checked={system == 1}
                        onChange={() => updateMySystem(1)}
                      />
                      <span className={system == 1 ? "bold" : ""}>kg</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div>
                By proceeding, you agree to LS&Co. <a href="">Terms of Use</a> &{" "}
                <a href="">Privacy Policy</a>
              </div>
              <button type="button" className="show-size-button">
                Show Me My Size
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const WhatMySizeModalContent = () => {
//     return (

//     )
// }

export default WhatsMySize;
