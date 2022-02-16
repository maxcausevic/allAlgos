
var twoSum = function(nums, target) {
    const previousValues = {}
    for (i=0; i <= nums.length; i++){
        const currentNumber = nums[i]
        const neededValue = target - currentNumber
        const index2 = previousValues[neededValue]
        if (index2 != null) {
            return [index2, i] 
        } else {
            previousValues[currentNumber] = i
        }
    }
};

console.log(twoSum([2,7,11,12], 9))

