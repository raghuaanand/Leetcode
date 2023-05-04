/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let size = salary.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum = sum + salary[i];
    }

    let average = (sum - Math.min(...salary) - Math.max(...salary)) / (size - 2);

    return average.toFixed(5);
};
