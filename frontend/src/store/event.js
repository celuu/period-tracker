import jwtFetch from "./jwt";

export const RECEIVE_EVENTS = 'events/RECEIVE_EVENTS'
export const REMOVE_EVENT = 'events/REMOVE_EVENT'
export const RECEIVE_EVENT = 'events/RECEIVE_EVENT'

export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})

export const removeEVENT = event => ({
    type: REMOVE_EVENT,
    event
})

export const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
})

// export const fetchEvent = (userId) => async dispatch => {
//     try{
//         const res = await jwtFetch()
//     }
// }

export const getEvents = (store) => {
    if(store.events){
        return Object.values(store.events)
    } else {
        return [];
    }
}

export const fetchEvents = () => async(dispatch) => {
    let res = await jwtFetch("/api/events");
    if(res.ok){
        let events = await res.json();
        dispatch(receiveEvents(events))
    }
}

export const createEvent = (userId, date, typeOfEvent, notes) => async (dispatch) => {
  let res = await jwtFetch("/api/events", {
    method: "POST",
    body: JSON.stringify({ userId, date, typeOfEvent, notes }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    let newEvent = await res.json();
    dispatch(receiveEvent(newEvent));
  }
};

const eventReducer = (state = {}, action) => {
    let newState = {...state};
    switch(action.type){
        case RECEIVE_EVENT:
            newState[action.event.id] = action.review
            return newState;
        case RECEIVE_EVENTS:
            return {...newState, ...action.events};
        default:
            return state;
    }
}

export default eventReducer;

