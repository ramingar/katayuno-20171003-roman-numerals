const RomanNumerals = function () {
    const NUMBERS_CONVERSION = {
        1   : 'I',
        2   : 'II',
        3   : 'III',
        4   : 'IV',
        5   : 'V',
        6   : 'VI',
        7   : 'VII',
        8   : 'VIII',
        9   : 'IX',
        10  : 'X',
        20  : 'XX',
        30  : 'XXX',
        40  : 'XL',
        50  : 'L',
        60  : 'LX',
        70  : 'LXX',
        80  : 'LXXX',
        90  : 'XC',
        100 : 'C',
        200 : 'CC',
        300 : 'CCC',
        400 : 'CD',
        500 : 'D',
        600 : 'DC',
        700 : 'DCC',
        800 : 'DCCC',
        900 : 'CM',
        1000: 'M',
        2000: 'MM',
        3000: 'MMM'
    };

    const toRoman = function (number) {
        const stringNumber = number.toString();
        const splitNumber  = getThousands(stringNumber.split(''));
        let inRoman        = '';

        if (number > 3999) {
            // We can write letters with overline... so instead of an overline we add parenthesis for thousands
            inRoman = `(${romanRepresentation(splitNumber.thousands)})${romanRepresentation(splitNumber.units)}`;
        } else {
            inRoman = romanRepresentation(splitNumber.thousands.concat(splitNumber.units));
        }

        return inRoman;
    };

    /**
     *
     * @param   splitNumber     Number with its units in an array: 3498 = [3, 4, 9, 8]
     * @returns {*}             Object like this: 3498 => return {thousands: [3], units: [4, 9, 8]}
     */
    const getThousands = function (splitNumber) {
        return splitNumber
            .reduce((acc, val) => Array.prototype.concat.call([], val, acc), [])
            .reduce((acc, val, index) => {
                if (index < 3) {
                    acc.units.unshift(val);
                } else {
                    acc.thousands.unshift(val);
                }

                return acc;
            }, {thousands: [], units: []});
    };

    const romanRepresentation = function (splitNumber) {
        return splitNumber
            .reduce((acc, val) => Array.prototype.concat.call([], val, acc), [])
            .reduce((acc, val, index) => {
                const unit          = val * (Math.pow(10, index));
                const numberInRoman = NUMBERS_CONVERSION[unit];
                acc                 = numberInRoman + acc;

                return acc;
            }, '');
    };

    return {toRoman};
};


export default RomanNumerals;
