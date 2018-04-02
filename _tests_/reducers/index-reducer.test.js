import rootReducer from "./../../src/reducers/index.js";
import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';
import ticketListReducer from './../../src/reducers/ticket-list-reducer';
import { createStore } from 'redux';

let store =createStore(rootReducer);

/*eslint-disable*/
describe('rootReducer', function() {
  // body...
  test('Should return default state value', ()=>{
    expect(rootReducer({}, {type: null})).toEqual({
      masterTicketList:{},
      selectedTicket: {}
    });
  })

  test('Should contain ticketListReducerlogic', ()=>{
    expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, {type:null}));
  })

  test('Should contain selectedTicketReducer logic', ()=>{
    expect(store.getState().selectedTicket).toEqual(selectedTicketReducer(undefined, {type:null}));
  })
});
