import Sort from './Sort'

function Range(nums) {
    const sortedNums = Sort(nums)
    return (sortedNums[sortedNums.length - 1] - sortedNums[0])
}

module.exports = Range;
