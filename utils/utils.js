const crypto = require('crypto');

const convertArrayToObj = (array, key) => {
    const initVal = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, initVal);
};

//instead of ugly ISO date => month/day/year
const makeDateReadable = (inputString) => {
    //creating regex for proper date format
    const regEx = /(\d{4})\-(\d{2})\-(\d{2}).*/;

    //returns 0 or 1
    const boolFullDate = regEx.test(inputString);

    if (boolFullDate === true) {
        const match = inputString.match(regEx);
        return `${match[2]}/${match[3]}/${match[1]}`;
    } else null;
}

//easy way to generator 32 bit ints
const randU32Sync = () => {
  return crypto.randomBytes(4).readUInt32BE(0, true);
}


module.exports = {
    convertArrayToObj: convertArrayToObj,
    makeDateReadable: makeDateReadable,
    randU32Sync: randU32Sync
}