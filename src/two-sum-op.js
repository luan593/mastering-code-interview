function twoSum(array, target) {
    if (array.length < 2) return null;
    const container = new Map();
    for (let i = 0; i < array.length; i ++) {
        let number = array[i];
        if (container.get(number) !== undefined) {
            return [container.get(number), i];
        }
        let difference = target - number;
        container.set(difference, i);
    }
    return null;
}

module.exports = twoSum;