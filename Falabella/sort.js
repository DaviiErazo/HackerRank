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

const items = [2, 3, 5, 5, 5, 1, 1, 6, 4, 4, 4, 3, 3, 3, 3];

const itemsFrequency = (items) => {
  const frequency = items.reduce((frequencyMap, item) => {
    if (!frequencyMap[item]) frequencyMap[item] = 1;
    else frequencyMap[item]++;

    return frequencyMap;
  }, {});

  return frequency;
};

const spliteArrayByRepeatingItems = (items, allItemFrequency) => {
  let repeatingItems = [];
  let noRepeatingItems = [];

  for (i = 0; i < items.length; i++) {
    const item = items[i];

    if (allItemFrequency[item] > 1) repeatingItems.push(item);
    else noRepeatingItems.push(item);
  }

  return [repeatingItems, noRepeatingItems];
};

const sortByFrequency = (items, frequency) => {
  return [...items].sort((a, b) => {
    return frequency[b] - frequency[a] || b - a;
  });
};

const sortAsc = (items) => {
  return [...items].sort((a, b) => (a < b ? 1 : -1));
};

const itemsSort = (items) => {
  const allItemsFrequency = itemsFrequency(items);
  const [repeatingItems, noRepeatingItems] = spliteArrayByRepeatingItems(items, allItemsFrequency);

  const repeatingItemsFrequency = itemsFrequency(repeatingItems);

  const repeatingItemsSorted = sortByFrequency(repeatingItems, repeatingItemsFrequency);
  const noRepeatingItemsSorted = sortAsc(noRepeatingItems);

  return [...noRepeatingItemsSorted, ...repeatingItemsSorted];
};

console.log(itemsSort(items));
