function binarySearch(arr, target) {
  // arr 有序数组
  // 
  let left = 0;
  let right = arr.length - 1;
  //  算法中的 边界的关键 就是维护好 对变量的定义 让变量始终 遵循滴对他的定义
  // 比如 left 和 right 的定义为 在[left,right] 的左闭右闭区间内去寻找target
  while (left <= right) { // 当 left 和right 相等时 区间里 就一个值 所以是 <= 
    const mindIndex = Math.round(left + right / 2);
    const mid = arr[mindIndex];
    if (mid === target) {
      return mindIndex;
    } else if (target > mid) {
      left = mindIndex + 1; // 此时 主要left定义 为 在[left,right] 的左闭右闭区间内去寻找target mindIndex 因为已经对比过了 所以是 mindIndex + 1
    } else {
      right = mindIndex - 1;
    }
    return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))
