
export const initState = 0;
export const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state += 1;
        case "decrement":
            return state -= 1;
        default:
            return state;
    }
}
