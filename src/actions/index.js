export const calculate = () => {
    return {
        type: 'CALCULATE',
    }
}

export const backSpace = () => {
    return {
        type: 'BACKSPACE',

    }
}

export const clear = () => {
    return {
        type: 'CLEAR',

    }
}
export const buttonClick = (value) => {
    return {
        type: 'CLICK',
        payload: value
    }
}