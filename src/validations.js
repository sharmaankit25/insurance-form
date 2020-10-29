export const alphaCheck = (val) => {
    return /^[a-zA-Z ]*$/.test(val)
}

export const numericOnlyCheck = (val) => {
    return /^[0-9 ]*$/.test(val)
}

export const validPhoneCheck = (val) => {
    return /^([0]|\+91)?[6789]\d{9}$/.test(val)
}

export const validateEmail = (val) => {
    return /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(val)
}

export const validateAddress = (val) => {
    return /^[a-zA-Z0-9 /-]*$/.test(val)
}
