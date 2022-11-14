import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../component/textField";
import * as Yup from "yup";
import pc9Img from "../../img/pc9_2.png";
import "../../styles/pc9Input.css";
import { leviDatabase } from "../../util/levi_database";

const pc9Array = leviDatabase.map((item) => item.Identifier);

const validate = Yup.object({
  pc9Input: Yup.string()
    .required("This field is required")
    .max(9, "must be 9 characters long")
    .min(9, "must be 9 characters long")

    .oneOf(pc9Array, "This PC9 is not in our database"),
});

function Pc9Input(props) {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        pc9Input: "",
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
          <div className="row myLeviJeanTitle mx-auto mt-4">
            <span className="MY-LEVIS-JEANS">MY LEVI’S JEANS</span>
          </div>
          <div className="row 2of2">
            <span className="-of-2 mx-auto mt-2">2 of 2</span>
          </div>
          <div className="row pc9Instructions">
            <span className="Input-the-pc9-code-serial-number-found-on-the-back-of-the-care-tag mx-auto">
              Input the pc9 code (serial number) found on the back of the care
              tag.
            </span>
          </div>
          <div className="row pc9Img">
            <img className="mb-5" src={pc9Img} alt="pc9 tag" />
          </div>
          <div className="row pc9Input">
            <div>
              <TextField
                className="pc9InputField ms-2"
                label="PC9"
                id="pc9Input"
                name="pc9Input"
                type="text"
                onKeyDown={(e) => {
                  e.persist();
                  if (e.keyCode == 13) {
                    props.actions(formik.values);
                    navigate("/archive");
                  }
                }}
              />
            </div>
            <div className="justify-content-center d-flex text-danger">
              {formik.errors.pc9Input}
            </div>
          </div>
          <div className="testRun mx-auto justify-content-center align-items-center d-flex mt-3">
            <span>No Pc9 Code?, try a test run!</span>
            <button
              onClick={() => {
                let randomPc9 =
                  leviDatabase[Math.ceil(Math.random() * leviDatabase.length)]
                    .Identifier;
                formik.setFieldValue("pc9Input", randomPc9);
              }}
              className="btn p-1 testBtn text-light ms-2"
            >
              Give me PC9
            </button>
          </div>
          <div className="row submit">
            <button
              onClick={() => props.actions(formik.values)}
              className=" mx-auto mt-5 submitBtn"
              type="submit"
            >
              <Link to="/archive" state={{ pc9: formik.values }}>
                Submit
              </Link>
            </button>
          </div>
        </div>
      )}
    </Formik>
  );
}
Pc9Input.propTypes = {
  data: PropTypes.object,
};

export default Pc9Input;
