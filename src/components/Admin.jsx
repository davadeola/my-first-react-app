import React from "react";
import PropTypes from "prop-types";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";

function Admin(props){


  return(
    <div>
      <h2>Admin</h2>
      <TicketList ticketList={props.ticketList} currentRoutePath={props.currentRoutePath}/>
      <TicketDetail/>
    </div>
  );
}

export default Admin;

Admin.propTypes ={
  ticketList: PropTypes.array,
  currentRoutePath: PropTypes.string.isRequired


};
