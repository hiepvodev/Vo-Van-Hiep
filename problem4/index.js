function sum_to_n_a(n) {
    var s = 0;
    // Sum the values with for loop
    for (var i = 1; i <= n; i++) {
        s = s + i;
    }
    return s;
}
// Implement recursion
function sum_to_n_b(n) {
    if (n <= 1) {
        return n;
    }
    var s = n + sum_to_n_b(n - 1);
    return s;
}
// Addition of first n natural number formula is given
function sum_to_n_c(n) {
    // Here simple formula is used
    var s = (n * (n + 1)) / 2;
    return s;
}
console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
