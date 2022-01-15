const typedOut = require('./../typed-out-string');


describe('typedOutString', () => {

    it('typedOut("ab#z", "az#z") ➞ true', () => {
        expect(typedOut("ab#z", "az#z")).toBe(true);
    });

    it('typedOut("abc#d", "acc#c") ➞ false', () => {
        expect(typedOut('abc#d', 'acc#c')).toBe(false);
    });

    it('typedOut("x#y#z#", "a#") ➞ true', () => {
        expect(typedOut('x#y#z#', 'a#')).toBe(true);
    });

    it('typedOut("a###b", "b") ➞ true', () => {
        expect(typedOut('a###b', 'b')).toBe(true);
    });

    it('typedOut("Ab#z", "ab#z") ➞ false', () => {
        expect(typedOut('Ab#z', 'ab#z')).toBe(false);
    });

});