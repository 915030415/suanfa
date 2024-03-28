// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

//    注意是 有序的数组 ！！！！！
let removeDuplicates = function (nums) {
  // 快指针
  let i = 0;
  // 慢指针
  let j = 0;

  while (i < nums.length) {
    let fast = nums[i];
    let slot = nums[j];

    // 快慢不相等，说明找到了一个新的值
    // 把慢指针的位置更新，并且赋值成新的值，继续等待下一个新值。
    if (fast !== slot) {
      j++;
      nums[j] = fast;
    }
    i++;
  }

  console.log(nums);

  return j + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 0, 2, 2, 1, 3, 4]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// [0, 1, 0, 1, 2, 1, 3, 4, 3, 4]



// 代码
// 测试用例
// 测试结果
// 测试结果
// 26. 删除有序数组中的重复项
// 简单
// 相关标签
// 相关企业
// 提示
// 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

// 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：

// 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
// 返回 k 。
































// nums 是 有序的
function removeDuplicates(nums) {
  if (nums == null || nums.length === 0) return 0;
  let i = 1; // 从第1个开始遍历数组  因为第一个元素肯定不是不重复的
  let j = 0; // 表示 数组的  0 - j 下标内 存着 不重复的元素
  while (i < nums.length) {
    let man = nums[j];
    let kuai = nums[i];
    if (man !== kuai) {
      // 说明找到了 与 [0 - j] 里面 不重复的 数 需要 加到里面去 
      j++;
      nums[j] = kuai;
    }
    i++;
  }
  return j + 1; // 返回  没有重复元素区间内到元素个数
}
