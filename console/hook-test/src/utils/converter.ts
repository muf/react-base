const stringToNumber = (stringValue: string, defaultValue: number): number => {
    return Number(stringValue) || defaultValue;
}

const converter = {
    stringToNumber
}

export default converter;