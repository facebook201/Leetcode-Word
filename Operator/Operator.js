
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

