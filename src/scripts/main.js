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
  // WRITE YOUR CODE HERE
  const list = document.createElement('ul');

  element.appendChild(list);

  for (const item in data) {
    const listItem = document.createElement('li');

    listItem.textContent = item;
    list.appendChild(listItem);

    if (Object.values(data[item])) {
      createTree(listItem, data[item]);
    };
  };
}

createTree(tree, food);
