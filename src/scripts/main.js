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
  const unorderedList = document.createElement('ul');

  element.append(unorderedList);

  for (const key in data) {
    const list = document.createElement('li');

    list.textContent = key;

    unorderedList.append(list);

    if (Object.keys(data[key].length !== 0)) {
      createTree(list, data[key]);
    }
  }
}

createTree(tree, food);
