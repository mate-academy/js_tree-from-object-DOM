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

  for (const key in data) {
    const list = document.createElement('li');
    const nextList = data[key];

    list.textContent = key;
    unorderedList.append(list);

    if (Object.keys(nextList).length) {
      createTree(list, nextList);
    }
  }

  element.append(unorderedList);
}

createTree(tree, food);
