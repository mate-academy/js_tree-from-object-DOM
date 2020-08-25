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
    const el = document.createElement('li');

    el.textContent = key;
    list.append(el);

    if (Object.keys(data[key]).length !== 0) {
      createTree(list, data[key]);
    }
  }
  element.append(list);
}

createTree(tree, food);
