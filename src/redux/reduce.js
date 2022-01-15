import { action_type } from "./accion_type";

export const UserId_reduce = (state ="", action) => {
    
    switch (action.type ) {
        case action_type.user_id:
            return action.payload
            
        default:
            return state
    }
}

export const new_reduce = (state = [],action ) => {

    switch (action.type) {
        case action_type.new_user:
            return [
                 ...state,
                 action.payload
            ]
    
        default:
            return[
                ...state
            ];
    }
}