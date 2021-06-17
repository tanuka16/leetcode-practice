/*
  Approaches
    a. Recursive
    b. Iterative

*/

var inorderTraversal = function(root) {

  let result = []

  traverse(root)

  function traverse(node){

    if(node === null) return []

    else{
      traverse(node.left)

      result.push(node.val)

      traverse(node.right)

    }
  }

  return result
}

// ----------------------------------------------------------------

var inorderTraversal = function(root) {

  let result = []
  let stack = []

  if(root === null) return result

  while(true){

    if(root !== null){

      stack.push(root)

      root = root.left
    }else{
      if(stack.length === 0)  break
      root = stack.pop()
      result.push(root.val)
      root = root.right
    }
  }

  return result

};

console.log(inorderTraversal([1,null,2,3]));
