//EASY--------------------
//LEETCODE QUESTION:1 ------- 1323. Maximum 69 Number SOLVE
var maximum69Number = function (num) {
    let str = num.toString();
    if (str.includes("6")) {
        num = parseInt(str.replace("6", "9"));
    }
    return num;
};
console.log(maximum69Number(9669));


//EXAMPLE:2
var maximum69Number = function (num) {
    let str = num.toString();
    if (str.includes("6")) {
        num = parseInt(str.replace("6", "9"));
    }
    return num;
};

console.log(maximum69Number(9969));



//LEETCODE QUESTION:2 ----------- 1. Two Sum SOLVE
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));



//LEETCODE QUESTION:4 ---- 9. Palindrome Number SOLVE
var isPalindrome = function (x) {
    let rev = 0;
    let original = x;
    while (x > 0) {
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x / 10);
    }
    return rev === original;
};
console.log(isPalindrome(-121));



// QUESTION:4 ---- Palindrome Number SOLVE ----- with string for beginner
var isPalindrome = function (x) {
    let str = x.toString();

    let rev = str.split('').reverse().join("");
    if (str === rev) {
        return true;

    } else {
        return false
    }
};
console.log(isPalindrome(121));