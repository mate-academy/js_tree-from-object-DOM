'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const subList = document.createElement('ul');

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      item.append(createTree(subList, data[key]));
    }

    subList.append(item);
  }

  element.append(subList);

  return subList;
}

createTree(tree, food);
