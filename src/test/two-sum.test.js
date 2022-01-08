const twoSum = require('./../two-sum');


describe('twoSum', () => {

    it('twoSum([1,3,7,9,2], 11) ➞ [3,4]', () => {
        expect(twoSum([1,3,7,9,2], 11)).toEqual([3,4]);
    });

    it('twoSum([1,3,7,9,2], 25) ➞ null', () => {
        expect(twoSum([1,3,7,9,2], 25)).toBe(null);
    });

    it('twoSum([], 99) ➞ null', () => {
        expect(twoSum([], 99)).toBe(null);
    });

    it('twoSum([5], 5) ➞ null', () => {
        expect(twoSum([5], 5)).toBe(null);
    });

    it('twoSum([1,6], 7) ➞ [0,1]', () => {
        expect(twoSum([1,6], 7)).toEqual([0,1]);
    });

    it('twoSum([1,5,10,6,0], 5) ➞ [1,4]', () => {
        expect(twoSum([1,5,10,6,0], 5)).toEqual([1,4]);
    });

});