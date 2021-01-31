export const Reducer = (state = {
        correct : 0
        }, action) => {
    switch(action.type){
        case "CHECK":
            var curr = state.correct;
            return {...state, correct : curr + (action.payload[0] === action.payload[1] ? 1 : 0)};
        default :
            return state;
    }
}