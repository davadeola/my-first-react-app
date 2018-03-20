import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import {Switch, Route} from "react-router-dom";
import NewTicketControl from "./NewTicketControl";
import Error404 from "./Error404";
import Admin from "./Admin";
import {v4} from "uuid";
//import Moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimerUpdateTimer = setInterval(() => this.updateTicketElapsedWaitTime(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.waitTimerUpdateTimer);
  }

  handleAddingNewTicketToList(newTicket) {
    var newTicketId = v4();
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});

  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId =>{
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticketId) {
    this.setState({selectedTicket: ticketId});
  }

  render() {

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() =>< TicketList ticketList = {
            this.state.masterTicketList
          } />}/>
          <Route path='/newticket' render={() =>< NewTicketControl onNewTicketCreation = {
            this.handleAddingNewTicketToList
          } />}/>
          <Route path='/admin' render={(props) => <Admin ticketList={this.state.masterTicketList} currentRoutePath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket} selectedTicket={this.state.selectedTicket}/>}/>

          <Route component={Error404}/>

        </Switch>
      </div>
    );
  }
}

export default App;
