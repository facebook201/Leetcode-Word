
/**
 * sy Readme 位运算符相关知识点预习
 */


/**
 * Leetcode 136 只出现一次的数字
 * 
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。 
 * 不使用额外的空间 
 * sy ^ 异或运算 满足相同数字 ^ 为零
 */
const nums = [1, 2, 3, 1, 2, 3, 4, 7, 4];

function singleNumber(nums) {
  if (!nums || !nums.length) return;

  let result = 0;
  // 选择
  for (const num of nums) {
    result ^= num; 
  }
  console.log(result);
}

singleNumber(nums);