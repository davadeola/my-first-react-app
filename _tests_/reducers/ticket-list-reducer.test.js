import ticketListReducer from "./../../src/reducers/ticket-list-reducer";

/*eslint-disable*/

describe("ticketListReducer", ()=> {
  // body...
  test("Should return default state if no action type is defined ", ()=>{
    expect(ticketListReducer({}, {type: null})).toEqual({});
  });
});

/*eslint-disable*/
