const add = (function() {
    let counter = 0;
    return function () { counter += 1; return counter}
})();

console.log(add()); // 0 + 1 = 1
console.log(add()); // 1 + 1 = 2
console.log(add()); // 2 + 1 = 3