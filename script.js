function threeSum(arr, target) {
// write your code here

  n = len(arr)
  closest_sum = float("inf")
  for i in range(n):
    for j in range(i + 1, n):
      for k in range(j + 1, n):
        sum = arr[i] + arr[j] + arr[k]
        difference = abs(sum - target)
        if difference < difference:
          closest_sum = sum
  return closest_sum
  
}

module.exports = threeSum;
