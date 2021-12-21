//二分法
var erfemfa = function(arr,target) {
    let left = 0, right = arr.length -1;
    while (left <= right) {
        const mid = Math.floor((right-left)/2) + left
        const num = arr[mid]
        if (num == target) {
            return mid
        } else if(num > target) {
            right = mid -1
        } else {
            left = mid +1
        }
    }
    return -1
};
return function(n) {
    let left = 1, right = n;
    while (left < right) { // 循环直至区间左右端点相同
        const mid = Math.floor(left + (right - left) / 2); // 防止计算时溢出
        if (isBadVersion(mid)) {
            right = mid; // 答案在区间 [left, mid] 中
        } else {
            left = mid + 1; // 答案在区间 [mid+1, right] 中
        }
    }
    // 此时有 left == right，区间缩为一个点，即为答案
    return left;
};