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

  for (const dataKey in data) {
    const listElement = document.createElement('li');

    list.append(listElement);
    listElement.textContent = dataKey;

    if (typeof data[dataKey] === 'object') {
      createTree(list, data[dataKey]);
    }
  }

  if (element.lastElementChild) {
    element.lastElementChild.append(list);
  } else {
    element.append(list);
  }
}

createTree(tree, food);
