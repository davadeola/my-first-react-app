import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
//import Moment from "moment";

function Ticket(props) {
console.log(props.currentRoutePath);
  function handleSavingSelectedTicket (ticketId){

    const {dispatch} = props;
    const action = {
      type: "SELECT_TICKET",
      ticketId: ticketId
    };

    dispatch(action);

  }
  const ticketInformation =
  <div>
    <h3>{props.location}
      - {props.names}</h3>
    <h4>{props.formattedWaitTime}</h4>

    <hr/>
  </div>;

  if (props.currentRoutePath === "/admin") {
    return (
      <div onClick={()=>{
        handleSavingSelectedTicket(props.ticketId);
      }}>
        <style jsx>
          {
            ` div {
              background-color: red;
            }
             `
          }</style>
        {ticketInformation}
        ghjklkjhjk
      </div>
    );

  } else {
    return (
      <div>
        {ticketInformation}
        hello
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
  currentRoutePath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);
