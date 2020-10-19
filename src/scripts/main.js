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
  const list = document.createElement('ul');

  element.append(list);

  for (const key in data) {
    const listElement = document.createElement('li');

    listElement.textContent = key;
    list.append(listElement);

    if (Object.keys(data[key]).length) {
      createTree(listElement, data[key]);
    }
  }
}

createTree(tree, food);
