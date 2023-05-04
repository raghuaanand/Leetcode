/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let size = salary.length;
    let minSal = Math.min(...salary);
    let maxSal = Math.max(...salary);
    let sum = 0;
    for(let i = 0; i < size; i++){
        sum = sum + salary[i];
    }

    let average = (sum - minSal - maxSal)/(size - 2);
    function trueRound(average, digits){
        return (Math.round((average*Math.pow(10,digits)).toFixed(digits-1))
         /Math.pow(10, digits)).toFixed(digits);
    }

    return trueRound(average, 5);
};