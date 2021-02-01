export const initialState = {
    correct : 0
};

export const Reducer = (state = initialState, action) => {
    switch(action.type){
        case "CHECK":
        {
            var curr = state.correct;
            var str1 = action.payload[0];
            var str2 = action.payload[1];
            if(str1 === str2)
                curr = curr+1;
            return {...state, correct : curr};
        }
        default :
            return state;
    }
}