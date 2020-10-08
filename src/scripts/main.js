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
  if (Object.keys(data).length) {
    const list = document.createElement('ul');

    for (const key in data) {
      const brunch = document.createElement('li');

      brunch.textContent = key;

      createTree(brunch, data[key]);

      list.append(brunch);
    }

    element.append(list);
  }
}

createTree(tree, food);
