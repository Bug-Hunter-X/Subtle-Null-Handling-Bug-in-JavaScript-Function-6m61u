function foo(a, b) {
  // Use optional chaining and nullish coalescing
  return (a ?? 0) + (b ?? 0);
}

console.log(foo(1, null)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, 2)); // 3
console.log(foo(null, null)); // 0