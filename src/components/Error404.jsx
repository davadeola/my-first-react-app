import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function Error404(props){
  return(
    <div>
      <h2>The page {props.location.pathname} does not exist! </h2>
      <h3>Would you like to return <Link to="/">Home</Link> instead?</h3>
    </div>
  );
}

export default Error404;

Error404.propTypes={
  location:PropTypes.object
};
