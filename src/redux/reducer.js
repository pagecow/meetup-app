const initialState = {
    event_id: '',
}

const UPDATE_EVENT_ID = 'UPDATE_EVENT_ID';

export function updateEventId(eventObj){
    return{
        type: UPDATE_EVENT_ID,
        payload: eventObj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_EVENT_ID:
            let event_id = payload;
            return {...state, event_id};

        default:
            return state;
    }
}