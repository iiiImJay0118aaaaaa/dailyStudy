//回文数 
//给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
//回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是
//转换为数组 比较
var isPalindrome = function(x) {
    if (x <0) {
        return false;
    } else {
        if (x.toString().split('').reverse().join() == x.toString().split('')) {
            return true
        } else {
            return false
        }
    }
};
// 从后往前循环 
var isPalindrome1 = function(x) {
    if (x <0) {
        return false;
    } else {
        let str =  x + '';
        let newStr = '';
        for (var i = str.length -1 ; i >= 0 ; i --) {
            newStr += str[i];
        }
        return str == newStr
    }
};
// 循环 比较第一和最后一项 第二和倒数第二
// -20000(借呗) + 15000(外债) + 10000(公积金)  + 18000 (1.15) + 19000 (2.15)  + 19000(3.15)  + 4500(公积金)