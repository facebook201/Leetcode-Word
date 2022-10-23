/**
 * @description 
 * * 给定一个整数数组nums 和一个整数目标值 target，请你在该数组中找出
 * * 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * @param {number[]} nums 
 * @param {number} target
 * @return {number[]}
 * 
 * 利用一个数据结构来存储，空间换时间
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

const nums1 = [0, 0, 1, 1, 2, 4, 5, 6, 6, 7];

function removeDuplicates(nums) {
  if (nums == null || !nums.length) {
    return 0;
  }

  let p = 0; // 头指针
  let q = 1; // 尾指针

  while (q < nums.length) {
    // 如果不想等就移动慢指针
    if (nums[p] !== nums[q]) {
      // 优化相邻两个元素之间没有重复值的时候 不需要赋值
      if (q - p > 1) {
        // 不想等就赋值盖掉重复的值
        nums[p + 1] = nums[q];
      }
      p++;
    }
    // 快指针负责遍历
    q++;
  }
  return p + 1;
}

// nums [0, 1, 2, 4, 5, 6, 7,(P 指针指向7) 6, 6, 7]
removeDuplicates(nums1);


/**
 * Leetcode 27 移除元素
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 
 * @param {number[]} nums
 * @param {number} val
 */

const nums3 = [0, 1, 2, 2, 3, 0, 4, 2];

function removeElement(nums, val) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let l = 0; // 左
  let r = nums.length; // 右

  // 双指针优化
  while (l < r) {
    if (val === nums[l]) {
      nums[l] = nums[r - 1];
      r--;
    } else {
      l++;
    }
  }
  console.log(l, nums);

  let i = 0;
  // 遍历
  for (const num of nums) {
    if (num !== val) {
      nums[i] = num;
      i++
    }
  }

  return i;
}

removeElement(nums3, 2);



/**
 * Leetcode 35 插入元素 二分查找 O(logn)
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 */
const nums4 = [1,3,5,6];

function searchInsert(nums, target) {

};

searchInsert(nums4, 2);

