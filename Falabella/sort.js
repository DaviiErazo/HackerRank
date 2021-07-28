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

const numbersFrequency = (numbers) => {
  const frequency = numbers.reduce((frequencyMap, number) => {
    if (!frequencyMap[number]) frequencyMap[number] = 1;
    else frequencyMap[number]++;

    return frequencyMap;
  }, {});

  return frequency;
};

const spliteArrays = (numbers, allNumberFrequency) => {
  let repeatingNumbers = [];
  let noRepeatingNumbers = [];

  for (i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (allNumberFrequency[number] > 1) repeatingNumbers.push(number);
    else noRepeatingNumbers.push(number);
  }

  return [repeatingNumbers, noRepeatingNumbers];
};

const sortByFrequency = (numbers, frequency) => {
  return [...numbers].sort((a, b) => {
    return frequency[b] - frequency[a] || b - a;
  });
};

const sortAsc = (numbers) => {
  return [...numbers].sort((a, b) => (a < b ? 1 : -1));
};

const allNumbersFrequency = numbersFrequency(numbers);
let [repeatingNumbers, noRepeatingNumbers] = spliteArrays(numbers, allNumbersFrequency);

const repeatingNumbersFrequency = numbersFrequency(repeatingNumbers);

const numbersRepeatSorted = sortByFrequency(repeatingNumbers, repeatingNumbersFrequency);
noRepeatingNumbers = sortAsc(noRepeatingNumbers);

console.log([...noRepeatingNumbers, ...numbersRepeatSorted]);
