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
//-----------------------------------------------------------------------------

var kthSmallest = function(root, k) {

  let stack = []

  let count = 0

  if(root === null) return

  while(true){

    if(root !== null){

      stack.push(root)

      root = root.left

    }else{

      if(stack.length === 0)  break

      root = stack.pop()

      count++

      if(count === k) return root.val

      root = root.right

    }

  }

};
console.log(kthSmallest([3,1,4,null,2], 1));

console.log(kthSmallest([5,3,6,2,4,null,null,1], 3));
