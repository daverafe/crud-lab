export default function manageReviews(state =[], action) {
    switch(action.type){
        case "ADD_REVIEW":
            return state.concat(action.payload)
        
        case "DELETE_REVIEW":
            return state.filter(review => review.id !== action.payload)
        
        default:
            return state
    }
    
    
}