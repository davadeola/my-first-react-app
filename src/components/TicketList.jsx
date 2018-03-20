import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
function TicketList(props) {

  return (
    <div>
      <hr/> {Object.keys(props.ticketList).map(function(ticketId) {
        var ticket = props.ticketList[ticketId];
        return <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRoutePath={props.currentRoutePath}
          onTicketSelection={props.onTicketSelection}
          ticketId={ticket.id}
        />;
      })}
    </div>
  );
}

export default TicketList;

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRoutePath: PropTypes.string,
  onTicketSelection: PropTypes.func
};
