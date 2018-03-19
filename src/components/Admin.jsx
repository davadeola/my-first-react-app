import React from "react";
import PropTypes from "prop-types";
import TicketList from "./TicketList";

function Admin(props){

  console.log(props.currentRoutePath);
  return(
    <div>
      <h2>Admin</h2>
      <TicketList ticketList={props.ticketList} currentRoutePath={props.currentRoutePath}/>
    </div>
  );
}

export default Admin;

Admin.propTypes ={
  ticketList: PropTypes.array,
  currentRoutePath: PropTypes.string.isRequired


};
