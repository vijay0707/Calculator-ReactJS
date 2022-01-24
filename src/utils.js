export const calculate = (state) => {
    try {
        const result = eval(state);
        return result
    } catch (e) {
        return state = "error"
    }
}