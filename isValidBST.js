/*  98. Validate Binary Search Tree

Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false

*/

var isValidBST = function(root) {

  return validateBST(root, -Infinity, Infinity)

  function validateBST(root, minValue, maxValue){

    //base case
    if(root === null) return true

    if(root.val <= minValue || root.val >= maxValue){

      return false
    }else{

      let leftNode = validateBST(root.left, minValue, root.val)
      let rightNode = validateBST(root.right, root.val, maxValue)

      return leftNode && rightNode
    }
  }
};
console.log(isValidBST([5,1,4,null,null,3,6]));
