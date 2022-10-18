/**
 * @description 
 * * 给定一个整数数组nums 和一个整数目标值 target，请你在该数组中找出
 * * 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * @param {number[]} nums 
 * @param {number} target
 * @return {number[]}
 * 
 * todo 利用一个数据结构来存储，空间换时间
 * 
 * 输入：nums = [2,7,11,15], target = 9
   输出：[0,1]
   解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */
const twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    // 判断 target - 元素 的 值是否存在与 Map 存在就表示 两值之和等于 target
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    // 把值添加进 map 循环就 通过diff去 map里面找差值
    map.set(nums[i], i);
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

// return [0, 1]

/**
 * Leetcode 26
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，
 * 返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。O(1) 空间条件下完成
 * @description 删除有序数组中的重复项
 * @param {number[]} nums
 * @param {number} 返回删除后数组的新长度
 * 
 * 双指针移动 不需要要删除重复的的元素
 */

const nums1 = [0, 0, 1, 1, 2, 2, 3, 4, 6, 7];

function removeDuplicates(nums) {
  if (nums == null || !nums.length) {
    return 0;
  }

  let first = 0;
  let second = 1;
  let len = 1;

  while (second < nums.length) {
    // 如果相等就 +1
    if (nums[first] !== nums[second]) {
      len++; 
    } else {
      nums[first] = nums[second];
    }
    first++;
    second++;
  }
  console.log(len)
  return len;
}

removeDuplicates(nums1);





















