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
    list.insertAdjacentHTML('beforeend', `<li>${key}</li>`);

    if (typeof data[key] === 'object') {
      createTree(list, data[key]);
    }

    element.append(list);
  }
}

createTree(tree, food);
