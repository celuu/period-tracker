import jwtFetch from "./jwt";

export const RECEIVE_EVENT = 'events/RECEIVE_EVENT'
export const REMOVE_EVENT = 'events/REMOVE_EVENT'
export const CREATE_EVENT = 'events/CREATE_EVENT'

export const receiveEVENT = event => ({
    type: RECEIVE_EVENT,
    event
})

export const removeEVENT = event => ({
    type: REMOVE_EVENT,
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

