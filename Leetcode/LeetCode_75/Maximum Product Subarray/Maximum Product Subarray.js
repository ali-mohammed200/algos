function maxProduct(nums) {
  let maxProduct = Math.max(...nums);
  let currentMin = 1, currentMax = 1;

  for (let i = 0; i < nums.length; i++) {
      // debugger;
      let num = nums[i];
      
      if (num === 0) {
          currentMin = 1;
          currentMax = 1;
          continue;
      }
      
      let temp = currentMax * num;
      currentMax = Math.max(temp, num * currentMin, num);
      currentMin = Math.min(temp, num * currentMin, num);

      maxProduct = Math.max(currentMax, maxProduct);
  }

  return maxProduct;
}

// Example usage:
let nums = [2, 3, -2, 4];
console.log(maxProduct(nums)); // Output: 6





function maxProduct2(nums) {
  if (nums.length === 0) return 0;

  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  let objTrack = {
    'currentNum': [],
    'maxProductBefore': [],
    'minProductBefore': [],
    'max*curr': [],
    'min*curr': [],
    'maxProductAfter': [],
    'minProductAfter': [],
    'result': []
  }

  for (let i = 1; i < nums.length; i++) {
      let currentNum = nums[i];
      objTrack['currentNum'].push(currentNum);
      objTrack['maxProductBefore'].push(maxProduct);
      objTrack['minProductBefore'].push(minProduct);
      objTrack['max*curr'].push(maxProduct * currentNum);
      objTrack['min*curr'].push(minProduct * currentNum);
      
      // If the current number is negative, swap maxProduct and minProduct
      if (currentNum < 0) {
          [maxProduct, minProduct] = [minProduct, maxProduct];
      }
      // Calculate max and min products for the current number
      maxProduct = Math.max(currentNum, maxProduct * currentNum);
      minProduct = Math.min(currentNum, minProduct * currentNum);

      // Update the result with the maximum product found so far
      result = Math.max(result, maxProduct);
      objTrack['maxProductAfter'].push(maxProduct);
      objTrack['minProductAfter'].push(minProduct);
      objTrack['result'].push(result);
  }
  console.table(objTrack);
  return result;
}

// Example usage:
let nums2 = [2, 3, -2, 4];
console.log(maxProduct(nums2)); // Output: 6



