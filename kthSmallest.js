/*
  Approaches
    a. Recursive
    b. Iterative

*/

var kthSmallest = function(root, k){

  let arr = []

  function inOrder(node){

    if(node === null) return

    inOrder(node.left)

    arr.push(node.val)

    inOrder(node.right)
  }

  inOrder(root)

  return arr[k-1]

}
