function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

function bar(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return foo(x, y) * 2;
}

console.log(bar(2,3)); // Output: 10

try{
  console.log(bar(2,"3")); //Throws an error
} catch(e){
  console.error(e)
}
