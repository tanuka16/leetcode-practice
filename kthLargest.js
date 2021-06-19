// Recursive Approach 
function kthLargest(root, k){

  let stack = []

  function inorderTraversal(node) {

    //base case
    if(node === null) return

    inorderTraversal(node.left)

    stack.push(node.val)

    inorderTraversal(node.right)

  }

  inorderTraversal(root)

  return stack[stack.length - k]

}

console.log(kthLargest([5,3,6,2,4,null,null,1], 3));  //output: 4
