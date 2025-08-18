//EASY----------------------
//LEETCODE QUESTION:1 SOLVE
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



//LEETCODE QUESTION:2 SOLVE
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



