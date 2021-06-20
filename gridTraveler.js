/*
  Approaches
    a. recursion
    b. memoization
    c. dynamic programming
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
