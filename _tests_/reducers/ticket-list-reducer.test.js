import ticketListReducer from "./../../src/reducers/ticket-list-reducer";

/*eslint-disable*/

describe("ticketListReducer", ()=> {
  let action;
  const sampleTicketData={
    names : 'Ryan & Aimen',
    location : '4b',
    issue : 'Jest is being a diva and won\'t work with Webpack!',
    timeOpen : 1500000000000,
    id: 0
  }
  test("Should return default state if no action type is defined ", ()=>{
    expect(ticketListReducer({}, {type: null})).toEqual({});
  });

  test("Should successfully add new ticket data to the masterTicketList", ()=>{
    const {names, location, issue, timeOpen, id} = sampleTicketData;
    action = {
      type: "ADD_TICKET",
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
    }

    expect(ticketListReducer({}, action)).toEqual({
      [id]:{
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    })
  })
});

/*eslint-disable*/
