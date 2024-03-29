/**
    给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

    不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

    元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

     

    示例 1:

    给定 nums = [3,2,2,3], val = 3,

    函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

    你不需要考虑数组中超出新长度后面的元素。
    示例 2:

    给定 nums = [0,1,2,2,3,0,4,2], val = 2,

    函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

    注意这五个元素可为任意顺序。

    你不需要考虑数组中超出新长度后面的元素。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/remove-element
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function removeElement(nums, val) {
  let i = 0; // 表示 arr 元素的个数
  let j = 0; // 表示 [0,j] 中存着不为val的值


  while (i < nums.length) {
    let num = nums[i];
    if (num !== val) {
      nums[j] = num;
      j++;
    }

    i++;
  }
  console.log(nums, 'log');
  return j;
}
// 数组里面出现的第一个 val 前的值 就是想要的数组 后面的就不用管了

console.log(removeElement([1, 4, 5, 5, 4, 5, 6, 33, 5, 5, 5, 76, 7, 3, 5], 5), 'log');
