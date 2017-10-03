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
        10: 'X'
    };

    const toRoman = function (number) {
        return NUMBERS_CONVERSION[number];
    };

    return {toRoman};
};

// TESTS
test('-------- Component: unit conversion between numeral systems [1-10]', (assert) => {
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
