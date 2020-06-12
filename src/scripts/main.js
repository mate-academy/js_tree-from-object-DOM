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

  for (const key in data) {
    const point = document.createElement('li');

    point.textContent = key;

    if (Object.keys(data[key]).length !== 0) {
      createTree(point, data[key]);
    }

    list.append(point);
  }

  element.append(list);
}

createTree(tree, food);
