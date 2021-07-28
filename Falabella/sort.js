const numbers = [2, 3, 5, 5, 5, 1, 1, 6, 4, 4, 4, 3, 3, 3, 3];
let numbersRepeat = [];
let numbersNotRepeat = [];
let counters = [];

for (i = 0; i < numbers.length; i++) {
  const item = numbers[i];
  if (!counters[item]) {
    counters[item] = 1;
  } else {
    counters[item]++;
  }
}

for (i = 0; i < numbers.length; i++) {
  const index = numbers[i];
  const item = counters[index];
  if (item > 1) {
    numbersRepeat.push(index);
  } else {
    numbersNotRepeat.push(index);
  }
}


const asd = numbersRepeat.sort((a, b) => {
    const diff = a - b;
    switch (diff) {
      case 0:
          return 1;
      default:
          return diff;
    }
});

console.log(asd);

