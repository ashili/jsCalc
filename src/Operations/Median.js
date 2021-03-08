import IsEven from './IsEven'

function Median(nums) {
    let result;
    const sortedNums = nums.sort();
    if (IsEven(sortedNums.length + 1)) {
        result = sortedNums[(sortedNums.length + 1) / 2]
    } else {
        result = (sortedNums[sortedNums.length / 2] + sortedNums[(sortedNums.length / 2) - 1]) / 2.00
    }
    return result
}

module.exports = Median;
