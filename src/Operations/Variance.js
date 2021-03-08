import Mean from "./Mean"

function Variance(nums) {
    let total = 0
    const m = Mean(nums)
    for (let i = 0; i < nums.length; i++) {
        total += ((i - m) * (i - m))
    }
    return total / nums.length
}

module.exports = Variance;
