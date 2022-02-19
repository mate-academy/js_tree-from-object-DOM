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
  let nestedList;

  if (Object.keys(data).length > 0) {
    nestedList = document.createElement('ul');
    element.append(nestedList);
  }

  for (const elem in data) {
    if (data[elem]) {
      const nestedItem = document.createElement('li');

      nestedItem.textContent = elem;

      nestedList.append(nestedItem);
      createTree(nestedItem, data[elem]);
    }
  }
}

createTree(tree, food);
