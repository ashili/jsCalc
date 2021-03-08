
function Mean(a){
    let sum = a.reduce(function(a, b) { return a + b; }, 0);
    return sum/ a.length
}

module.exports = Mean;
