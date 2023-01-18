function removeLastNumber(arr) {
    const nums = [...arr];

    if (nums.length === 0) {
        return nums;
    }

    nums.pop();

    return nums;
}

module.exports = removeLastNumber;
