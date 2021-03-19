let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function snail(array) {
  const outputarray = [];
  const iter = () => {
    if (array.length == 0) {
      return;
    }
    var n = array[0].length - 1;
    for (var i = 0; i <= n; i++) {
      outputarray.push(...array[0].splice(0, 1));
    }
    for (var i = 1; i <= n; i++) {
      outputarray.push(...array[i].splice(n, 1));
    }
    for (var i = n - 1; i >= 0; i--) {
      outputarray.push(...array[n].splice(i, 1));
    }
    for (var i = n - 1; i > 0; i--) {
      outputarray.push(...array[i].splice(0, 1));
    }
    array.pop();
    array.shift();
    iter(array);
  };
  iter(array);
  return outputarray;
}

console.log(snail(arr));
