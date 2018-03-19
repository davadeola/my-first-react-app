import React from "react";
import  Ticket from "./Ticket";
import PropTypes from "prop-types";
function TicketList(props){

  return(
    <div>
      <hr/>
      {props.ticketList.map((ticket)=>
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRoutePath={props.currentRoutePath}
        />
      )}
    </div>
  );
}

export default TicketList;

TicketList.propTypes ={
  ticketList: PropTypes.array,
  currentRoutePath: PropTypes.string
};
