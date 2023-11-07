function fibonacci(n){ //, arr = [0,1]) {
  // if (n < 2) return n
  // else if (arr.length - 1 === n) return arr[n]
  // arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  // return fibonacci(n, arr)
  if(n < 2) {
    return n;
  }
  else {
    return fibonacci(n-1) + fibonacci(n - 2);
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log('');

  console.log("Expecting: 5");
  console.log("=>", fibonacci(5));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
// Find the nth element in the Fibonacci series. 
// The Fibonacci sequence starts with a 0 followed by a 1. 
// After that, every value is the sum of the two values preceding it. 
// Here are the first seven values as an example: 0, 1, 1, 2, 3, 5, 8.
// Base Cases: if n < 2 return n; else if arr.length === n return arr.pop
// Create an array: [0, 1] in params
// add base cases
// push array.length - 1 + array.length - 2
// call function