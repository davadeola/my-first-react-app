import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Ticket(props){
  return(
    <div>
      <style jsx>{`
            div {
              background-color: red;
            }
          `}</style>

      <h3>{props.location}</h3>
      <h3>{props.names}</h3>
      <p>
        <em>{props.issue}</em>
      </p>
      <p>{displayTimeOpen(props.timeOpen)}</p>
    </div>
  );
}

function displayTimeOpen(timeOpen){
  return timeOpen.from(new Moment(), true);
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};

export default Ticket;
