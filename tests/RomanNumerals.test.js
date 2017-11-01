import test from 'tape';

// Component to test
const RomanNumerals = function () {
    const NUMBERS_CONVERSION = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',
        1000: 'M',
        2000: 'MM',
        3000: 'MMM'
    };

    const toRoman = function (number) {
        const stringNumber = number.toString();
        const splitNumber = getThousands(stringNumber.split(''));
        let inRoman = '';

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
        return splitNumber.reverse().reduce((acc, val, index) => {
            if (index < 3) {
                acc.units.unshift(val);
            } else {
                acc.thousands.unshift(val);
            }

            return acc;
        }, {thousands: [], units: []});
    };

    const romanRepresentation = function (splitNumber) {
        return splitNumber.reverse().reduce((acc, val, index) => {
            const unit = val * (Math.pow(10, index));
            const numberInRoman = NUMBERS_CONVERSION[unit];
            acc = numberInRoman + acc;

            return acc;
        }, '');
    };

    return {toRoman};
};

// TESTS
test('-------- Praetorian: unit conversion between numeral systems [1-10]', (assert) => {
    const messageForNumber3Conversion = `'III' stands for '3' in roman numerals`;
    const messageForNumber6Conversion = `'VI' stands for '6' in roman numerals`;
    const expectedRomanNumeral3 = 'III';
    const expectedRomanNumeral6 = 'VI';

    const romanNumerals = RomanNumerals();

    const actualRomanNumeral3 = romanNumerals.toRoman(3);
    const actualRomanNumeral6 = romanNumerals.toRoman(6);

    assert.equal(actualRomanNumeral3, expectedRomanNumeral3, messageForNumber3Conversion);
    assert.equal(actualRomanNumeral6, expectedRomanNumeral6, messageForNumber6Conversion);

    assert.end();
});

test('-------- Centurion: unit conversion between numeral systems [1-100]', (assert) => {
    const messageForNumber67Conversion = `'LXVII' stands for '67' in roman numerals`;
    const messageForNumber49Conversion = `'XLIX' stands for '49' in roman numerals`;
    const expectedRomanNumeral67 = 'LXVII';
    const expectedRomanNumeral49 = 'XLIX';

    const romanNumerals = RomanNumerals();

    const actualRomanNumeral67 = romanNumerals.toRoman(67);
    const actualRomanNumeral49 = romanNumerals.toRoman(49);

    assert.equal(actualRomanNumeral67, expectedRomanNumeral67, messageForNumber67Conversion);
    assert.equal(actualRomanNumeral49, expectedRomanNumeral49, messageForNumber49Conversion);

    assert.end();
});

test('-------- Praetorian prefect: unit conversion between numeral systems [1-1000]', (assert) => {
    const messageForNumber467Conversion = `'CDLXVII' stands for '467' in roman numerals`;
    const messageForNumber849Conversion = `'DCCCXLIX' stands for '849' in roman numerals`;
    const expectedRomanNumeral467 = 'CDLXVII';
    const expectedRomanNumeral849 = 'DCCCXLIX';

    const romanNumerals = RomanNumerals();

    const actualRomanNumeral467 = romanNumerals.toRoman(467);
    const actualRomanNumeral849 = romanNumerals.toRoman(849);

    assert.equal(actualRomanNumeral467, expectedRomanNumeral467, messageForNumber467Conversion);
    assert.equal(actualRomanNumeral849, expectedRomanNumeral849, messageForNumber849Conversion);

    assert.end();
});

test('-------- Praetorian prefect: unit conversion between numeral systems [1-10000]', (assert) => {
    const messageForNumber3467Conversion = `'MMMCDLXVII' stands for '3467' in roman numerals`;
    const messageForNumber4467Conversion = `'(IV)CDLXVII' stands for '4467' in roman numerals`;
    const messageForNumber7849Conversion = `'(VII)DCCCXLIX' stands for '7849' in roman numerals`;
    const expectedRomanNumeral3467 = 'MMMCDLXVII';
    const expectedRomanNumeral4467 = '(IV)CDLXVII';
    const expectedRomanNumeral7849 = '(VII)DCCCXLIX';

    const romanNumerals = RomanNumerals();

    const actualRomanNumeral3467 = romanNumerals.toRoman(3467);
    const actualRomanNumeral4467 = romanNumerals.toRoman(4467);
    const actualRomanNumeral7849 = romanNumerals.toRoman(7849);

    assert.equal(actualRomanNumeral3467, expectedRomanNumeral3467, messageForNumber3467Conversion);
    assert.equal(actualRomanNumeral4467, expectedRomanNumeral4467, messageForNumber4467Conversion);
    assert.equal(actualRomanNumeral7849, expectedRomanNumeral7849, messageForNumber7849Conversion);

    assert.end();
});

test('-------- Centurion: unit conversion between numeral systems [1-899999]', (assert) => {
    const messageForNumber33467Conversion = `'(XXXIII)CDLXVII' stands for '33467' in roman numerals`;
    const messageForNumber444467Conversion = `'(CDXLIV)CDLXVII' stands for '444467' in roman numerals`;
    const messageForNumber869849Conversion = `'(DCCCLXIX)DCCCXLIX' stands for '869849' in roman numerals`;
    const expectedRomanNumeral33467 = '(XXXIII)CDLXVII';
    const expectedRomanNumeral444467 = '(CDXLIV)CDLXVII';
    const expectedRomanNumeral869849 = '(DCCCLXIX)DCCCXLIX';

    const romanNumerals = RomanNumerals();

    const actualRomanNumeral33467 = romanNumerals.toRoman(33467);
    const actualRomanNumeral444467 = romanNumerals.toRoman(444467);
    const actualRomanNumeral869849 = romanNumerals.toRoman(869849);

    assert.equal(actualRomanNumeral33467, expectedRomanNumeral33467, messageForNumber33467Conversion);
    assert.equal(actualRomanNumeral444467, expectedRomanNumeral444467, messageForNumber444467Conversion);
    assert.equal(actualRomanNumeral869849, expectedRomanNumeral869849, messageForNumber869849Conversion);

    assert.end();
});