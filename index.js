// Basic Math Functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  // Increment and Decrement Functions
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  // Parsing Numbers
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  // You can also add test cases to check your functions here.
  
  // Example test cases:
  console.log(add(5, 3));  // Should print 8
  console.log(subtract(10, 4));  // Should print 6
  console.log(multiply(2, 6));  // Should print 12
  console.log(divide(8, 2));  // Should print 4
  console.log(increment(7));  // Should print 8
  console.log(decrement(9));  // Should print 8
  console.log(makeInt("42"));  // Should print 42
  console.log(preserveDecimal("3.14159"));  // Should print 3.14159
  