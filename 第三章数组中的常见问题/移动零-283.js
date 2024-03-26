/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

  示例:

  输入: [0,1,0,3,12]
  输出: [1,3,12,0,0]
  说明:

  必须在原数组上操作，不能拷贝额外的数组。
  尽量减少操作次数。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/move-zeroes
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function moveZeroes(arr) {
  let k = 0 // k 的定义 [0,k) 的区间内 是便利过的 非0元素

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== 0) {
      const temp = arr[i]
      arr[i] = arr[k]
      arr[k] = temp
      k++
    }
  }
}
