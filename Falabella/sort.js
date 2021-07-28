/**
 * PRODUCT SORT
 *  In a warehouse, a manager would like to sort the items
 *  in the stock. Given an array of n item values, sort the
 *  array in ascending order, first by the number of items
 *  with a certain value, then by the values themselves.
 *
 * Example
 * n = 6
 * items = [4,5,6,5,4,3]
 *
 *  - There are 2 values that occur twice: [4, 4, 5, 5].
 *  - There are 2 values that occur once: [3, 6],
 *  - The array of items sorted by quantity and then by value in ascernding order is [3, 6, 4, 4, 5, 5]
 */

const numbers = [2, 3, 5, 5, 5, 1, 1, 6, 4, 4, 4, 3, 3, 3, 3];
let numbersRepeat = [];
let numbersNotRepeat = [];
let counters = [];

const numbersFrencuecy = (numbers) => {
    const freq = numbers.reduce((r, e) => {
        if (!r[e]) r[e] = 1;
        else r[e]++;
        return r;
    }, {});

    return [...numbers].sort((a, b) => {
        return freq[b] - freq[a] || b - a
    })
};

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

numbersRepeat = numbersFrencuecy(numbersRepeat);
numbersNotRepeat = numbersNotRepeat.sort((a, b) => a < b ? 1 : -1);
console.log([...numbersNotRepeat, ...numbersRepeat]);
