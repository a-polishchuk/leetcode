/**
 * First of all, condition for a triangle is a + b > c.
 * We don't need O(n^3) complexity here, simple loop will be enough.
 * To find max perimeter, we just need to check 3 consecutive elements of a sorted array.
 * if c >= a + b, then there is no check a1 < a and b1 < b,
 * c will be greater than a1 + b1 anyway.
 */
export function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => b - a);
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] + nums[i - 1] > nums[i - 2]) {
      return nums[i] + nums[i - 1] + nums[i - 2];
    }
  }
  return 0;
}
