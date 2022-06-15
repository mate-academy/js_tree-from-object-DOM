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
  const nestedList = document.createElement('ul');

  for (const key in data) {
    const item = document.createElement('li');

    item.innerText = key;
    nestedList.append(item);

    if (Object.values(data[key].length > 0)) {
      createTree(item, data[key]);
    }

    element.append(nestedList);
  }
}

createTree(tree, food);
