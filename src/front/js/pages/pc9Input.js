import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../component/textField";
import * as Yup from "yup";
import pc9Img from "../../img/pc9_2.png";
import "../../styles/pc9Input.css";
import { MatchPc9 } from "../../util/levi_datatbase_util";
import { leviDatabase } from "../../util/levi_database";


function Pc9Input(props) {
  const navigate = useNavigate();
  const [pc9ErrorModalOpen, setPc9ErrorModalOpen] = useState(false);

  const formSubmit = (props, formik) => {
    console.log(formik.values)
    if(validateInput()){
      let pc9Match = MatchPc9(formik.values.pc9Input)
      if(pc9Match) {
        setPc9ErrorModalOpen(false)
        sessionStorage.setItem('archiveFilterOn', true)
        // console.log(MatchPc9(formik.values.pc9Input))
        props.actionAddPc9(formik.values)
        props.actionAddPc9Match(pc9Match)
        navigate('../jeans')
      } else {
        setPc9ErrorModalOpen(true)
      }
    }
  }

  const validateInput = () => {

  }

  const validate = Yup.object({
    pc9Input: Yup.string()
      // .required("This field is required")
      // .max(9, "must be 9 characters long")
      // .min(9, "must be 9 characters long"),
  });

  return (
    <div>
     
    
    <Formik
      initialValues={{
        pc9Input: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div>
          {console.log(formik.values)}
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
          <div className={pc9ErrorModalOpen ? 'pc9-error-modal' : 'pc9-error-modal hide'} >
            <div>This project is only a proof of concept and his limited data.  Please use on of the following Pc9 codes to experience this demo:</div>
            <div className='pc9-list'>
              {leviDatabase.map( product => (
                <div>{product.Identifier}</div>
              ))}
            </div>
          </div>
          <div className="row pc9Input">
            <div>
              <TextField
                className="pc9InputField ms-2"
                label="PC9"
                id="pc9Input"
                name="pc9Input"
                type="text"
              />
            </div>
          </div>
          <div className="row submit">
            <button
              onClick={() => formSubmit(props, formik)}
              className=" mx-auto mt-5 submitBtn"
              type="submit"
            >Submit
            </button>
          </div>
        </div>
      )}
    </Formik>
    </div>
  );
}
Pc9Input.propTypes = {
  data: PropTypes.object,
};

export default Pc9Input;
