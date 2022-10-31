import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import TextField from "../component/textField";
import * as Yup from "yup";
import wLImg from "../../img/PC9-W26_L28.png";
import "../../styles/pc9Input.css";
import "../../styles/waistLengthInput.css";

const validate = Yup.object({
  waistInput: Yup.string()
    .required("This field is required")
    .max(3, "Cannot exceed 3 characters"),
  lengthInput: Yup.string()
    .required("This field is required")
    .max(3, "Cannot exceed 3 characters"),
});

function WaistLengthInput(props) {
  return (
    <Formik
      initialValues={{
        waistInput: "",
        lengthInput: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div>
          <div className="row archiveBackBtn">
            <div className="col-1">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="chevron-left mt-2"
              ></FontAwesomeIcon>
            </div>
            <div className="col-11">
              <p className="archiveBackTitle my-2">the Archive</p>
            </div>
          </div>
          <div className="row myLeviJeanTitle mx-1 mt-4">
            <span className="MY-LEVIS-JEANS">MY LEVI’S JEANS</span>
          </div>
          <div className="row 2of2">
            <span className="-of-2 mx-auto mt-2">1 of 2</span>
          </div>
          <div className="row pc9Instructions">
            <span className="Input-the-pc9-code-serial-number-found-on-the-back-of-the-care-tag mx-auto fs-6 px-0">
              Input the width & length measurements found on the front of your
              Levi Jean’s care tag.
            </span>
          </div>
          <div className="row pc9Img">
            <img className="mb-5" src={wLImg} alt="waistLength tag" />
          </div>
          <div className="row WaistInput">
            <div>
              <TextField
                className="waistLengthInputField ms-2"
                label="W"
                id="waistInput"
                name="waistInput"
                type="text"
              />
            </div>
          </div>
          <div className="row LengthInput">
            <div>
              <TextField
                className="waistLengthInputField ms-2"
                label="L"
                id="lengthInput"
                name="lengthInput"
                type="text"
              />
            </div>
          </div>
          <div className="row submit">
            <button
              onClick={() => {
                props.actionWaist(formik.values.waistInput);
                props.actionLength(formik.values.lengthInput);
              }}
              className=" mx-auto mt-5 submitBtn"
              type="submit"
            >
              <Link to="/pc9">Submit</Link>
            </button>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default WaistLengthInput;
