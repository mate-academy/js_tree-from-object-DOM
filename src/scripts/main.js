'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  const newList = document.createElement('ul');

  for (const key in data) {
    const newListItem = document.createElement('li');

    newListItem.append(key);

    newList.append(newListItem);
    element.append(newList);

    if (Object.keys(data[key]).length !== 0) {
      createTree(newList, data[key]);
    } else {
      continue;
    }
  }
}

createTree(tree, food);
