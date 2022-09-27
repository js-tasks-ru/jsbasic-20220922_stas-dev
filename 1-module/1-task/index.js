function factorial(n) {
  if (n === 0 || n === 1)
      return 1;
    for (var i = n - 1; i >= 1; i--) {
      n = n * i; 
    }
    return n; 
}
