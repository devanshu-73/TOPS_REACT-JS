export const initValue = 0;

export const counterReducer = (state, action) => {

    switch (action) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        default:
            return state;
    }

}