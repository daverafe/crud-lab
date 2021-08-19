import cuid from 'cuid';

export default function manageRestaurants(state =[], action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            return state.concat(action.payload)
        
        case "DELETE_RESTAURANT":
            return state.filter(restaurant => restaurant.id !== action.payload)
        
        default:
            return state
    }
    
    
}
