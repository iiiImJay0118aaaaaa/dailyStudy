// 两数之和    
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，
// 并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案

var twoSum = function(nums, target) {
    for ( var i = 0; i< nums.length; i++ ) {
        for ( var j = i+1; j< nums.length; j++ ) {
            if (nums[i] + nums[j] == target) {
                return [i,j]
            }
        }
    }
};
var twoSum1 = function(nums, target) {
    var map = new Map();
    for ( var i = 0; i< nums.length; i++ ) {
        var x = target - nums[i];
        if (map.has(x)) {
            return [map.get(x),i]
        }
        map.set(nums[i],i)
    }
};
var res = twoSum1([3,9,4,6,1,7],8)
console.log(res)



//整数 反转  123 → 321
var reverse = function(x) {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = parseInt(x / 10);
        rev = rev * 10 + digit;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
};
console.log(reverse(123456));
