let arr = [10, 5, 2, 3, 7, 5];
let num = 10;

function sumPairs(ints, s) {
  let lastNum;
  for (let i = 1; i < ints.length; i++) {
    if (lastNum && lastNum === ints[i]) {
      continue;
    }
    lastNum = ints[i];

    const slised = ints.slice(0, i); //from little to big arr

    const sumIndex = slised.indexOf(s - ints[i]); /// s - inst[i] means there is a needed operand in arr

    if (sumIndex !== -1) {
      return [slised[sumIndex], ints[i]];
    }
  }
}

console.log(sumPairs(arr, num));
