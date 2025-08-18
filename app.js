//LEETCODE QUESTION:1 SOLVE
var maximum69Number  = function(num) {
    let str = num.toString();
    if(str.includes("6")) {
        num = parseInt(str.replace("6", "9"));
    }
    return num;
};
console.log(maximum69Number(9669));


//EXAMPLE:2
var maximum69Number  = function(num) {
    let str = num.toString();
    if(str.includes("6")) {
        num = parseInt(str.replace("6", "9"));
    }
    return num;
};

console.log(maximum69Number(9969));
