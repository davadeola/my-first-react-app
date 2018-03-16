import React from "react";
import PropTypes from "prop-types";

function ComfirmationQuestions(props){
  return(
    <div>
      <p>Have you gone through all the lessons on Learn How to Program debugging Lesson?</p>
      <button onClick={props.onTroubleShootingConfirmation}>Yes</button>
    </div>
  );
}

export default ComfirmationQuestions;

ComfirmationQuestions.propTypes={
  onTroubleShootingConfirmation: PropTypes.func
};
