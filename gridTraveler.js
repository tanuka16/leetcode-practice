/*
  Approaches
    a. recursion
    b. memoization
    c. dynamic programming
*/
/*
                              (2, 3)
                      /                    \
              (1, 3)                      (2, 2)
            /        \             /           \
        (0, 3)      (1, 2)       (1, 2)        (2, 1)
        /   \        /   \       /     \       /     \
  (0, 2) (1, 1) (0, 2) (1, 1) (0, 2) (1, 1)  (0, 2) (1, 1)

*/

function gridTraveler(m, n){

  //base case
  if(m === 1 && n === 1)  return 1

  if(m === 0 || n === 0)  return 0

  //recursive case
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}
console.log(gridTraveler(2, 3))

// memoization

function gridTraveler(m, n){
  let memo = {}

  let key = m + ',' + n

  if(key in memo) return memo[key]
  //base case
  if(m === 1 && n === 1)  return 1

  if(m === 0 || n === 0)  return 0

  //recursive case
  memo[key] = gridTraveler(m - 1, n) + gridTraveler(m, n - 1)

  return memo[key]

}
console.log(gridTraveler(2, 3))

/* dynamic programming
    0 0 0 0
    0 1 1 1
    0 1 2 3
    0 1 3 6
*/  
function gridTraveler(m, n){

  let table = Array(m + 1).fill().map(() => Array(n + 1).fill(0))

  table[1][1] = 1

  // iterate over the row & col
  for(let row = 0; row <= m; row++){

    for(let col = 0; col <= n; col++){

      let current = table[row][col]

      // if it doesn't breach the boundary -> add below
      if(col + 1 <= n)  table[row][col + 1] += current

      // if it doesn't breach the boundary -> add to the right
      if(row + 1 <= m)  table[row + 1][col] += current
    }
  }

  return table[m][n]
}
console.log(gridTraveler(2, 3))
