const { backSpaceCompare } = require('./../question-04/typed-out-string-op');

describe('Backspace compare string', () => {

    it('backSpaceCompare("ab#z", "az#z") ➞ true', () => {
        expect(backSpaceCompare("ab#z", "az#z")).toBe(true);
    });

    it('backSpaceCompare("abc#d", "acc#c") ➞ false', () => {
        expect(backSpaceCompare('abc#d', 'acc#c')).toBe(false);
    });

    it('backSpaceCompare("x#y#z#", "a#") ➞ true', () => {
        expect(backSpaceCompare('x#y#z#', 'a#')).toBe(true);
    });

    it('backSpaceCompare("a###b", "b") ➞ true', () => {
        expect(backSpaceCompare('a###b', 'b')).toBe(true);
    });

    it('backSpaceCompare("Ab#z", "ab#z") ➞ false', () => {
        expect(backSpaceCompare('Ab#z', 'ab#z')).toBe(false);
    });

});