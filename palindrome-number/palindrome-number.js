/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false; // negative integers can never be palindromes
    }

    let original = x; // because the x turns to 0 inside the while loop
    let reversed = 0;

    while (x != 0) {
        let rem = x % 10;
        reversed = reversed * 10 + rem;
        x = Math.floor(x / 10);
    }

    return original === reversed;
};
