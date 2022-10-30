
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
  return result;
}
singleNumber(nums); 

/**
 * Leetcode 191 位1的个数
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数。
 * sy & 运算符同为1就是1, 否则都为0
 *
 * 逐渐依次相比 比如  xxx1xxx1xxx1xx1xx111xx
 *               
 * 1 11 111 1111 11111（）
 * 逐渐进行 & 操作 其他位是0 就可以依次判断是不是1 
 */
function hammingWeight(n) {
  let count = 0;
  
  for (let i = 0; i < 32; i++) {
    // 不等于 0 表示有1
    if ((n & (1 << i)) !== 0) {
      count++;
    }
  }
  return count;
}

hammingWeight(00000000000000000000000000001011);

/**
 * Leetcode 231 2 的幂
 * 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。
 * 如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。
 * 
 * @param {number} n 
 * @return {boolean}
 * 
 * 左移 <<
 * 
 * sy 如果 n 是正整数并且 n & (n - 1), 那么 n 就是2的幂。
 * 
 * sy 其中 -n 是n的相反数，是一个负数。该位运算技巧可以直接获取 n 二进制表示的最低位的1。（n & (n - 1)）=== 0;
 * sy -n 的二进制表示为n的二进制表示的每一位取反再加上1。 (n & -n) === n；
 */
function isPowerOfTwo(n) {
  // return n > 0 && (n & (n - 1)) === 0;
  return n > 0 && (n & -n) === n;
}

/**
 * Leetcode 268 丢失的数字
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 * 
 * nums = [3, 0, 1]; // 输出 2
 * 
 * @param {number[]} nums 
 * @return {number}
 */

function missingNumber(nums) {
  const len = nums.length;
  if (len === 0) return;

  for (let i = 0; i <= len; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

missingNumber([3, 0, 1]);

