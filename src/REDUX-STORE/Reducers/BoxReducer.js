
const initialState = {
    boxValue: [],
    history: [],
    amount: 1000,
    remove: []
}
const BoxReducer = (state = initialState, action) => {
    switch (action.type) {
        case "boxValue":
            if (state.boxValue.length >= 24) {
                return state
            } else {
                return {
                    ...state,
                    boxValue: [...state.boxValue, action.payload],
                };
            }
        case "reset":
            return {
                ...state,
                boxValue: []
            };


        case "histery":
            if (state.history.length >= 24) {
                return state
            } else {
                return {
                    ...state,
                    history: [...state.history, action.payload],
                };
            }
        case "amount":
            if (state.amount === 0) {
                return state

            } else {
                return {
                    ...state,
                    amount: state.amount - action.payload,
                };

            }
        case "remove":
            return {
                ...state,
                boxValue: state.boxValue.filter((state) => state !== action.payload)
            }

        default:
            return state;
    }
};
export default BoxReducer