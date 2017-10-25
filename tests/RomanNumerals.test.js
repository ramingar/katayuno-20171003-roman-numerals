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
        1000: 'M'
    };

    const toRoman = function (number) {
        const stringNumber = number.toString();
        const arrayNumber = stringNumber.split('');
        return arrayNumber.reverse().reduce((acc, val, index) => {
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

test('-------- Centurion: unit conversion between numeral systems [1-1000]', (assert) => {
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
