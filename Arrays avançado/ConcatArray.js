const nums1 = [1,2,3]
const nums2 = [4,5,6]

//concatenou o nums1 com o nums2
const nums3 = nums1.concat(nums2, [7,8,9])//pode adicionar mais

console.log(nums3)

//concatenacao com spread
const nums4 = [...nums1,...nums2,7,8,9]//pode adicionar mais
console.log(nums4)