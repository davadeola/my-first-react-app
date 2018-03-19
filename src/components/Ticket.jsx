import React from "react";
import PropTypes from "prop-types";
//import Moment from "moment";

function Ticket(props) {
  const ticketInformation = <div>
    <h3>{props.location}
      - {props.names}</h3>
    <h4>{props.formattedWaitTime}</h4>
    <p>
      <em>{props.issue}</em>
    </p>
    <hr/>
  </div>;

  if (props.currentRoutePath === "/admin") {
    return (
      <div onClick={() => {
        alert("hey, you just clicked the ticket belonging to " + props.names);
      }}>
        <style jsx>
          {
            ` div {
              background-color: red;
            }
             `
          }</style>
        {ticketInformation}
      </div>
    );

  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }

}

// function displayTimeOpen(timeOpen){
//   return timeOpen.from(new Moment(), true);
// }

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRoutePath: PropTypes.string
};

export default Ticket;
