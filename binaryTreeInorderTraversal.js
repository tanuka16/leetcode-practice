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
