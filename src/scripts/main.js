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
  const ul = document.createElement('ul');

  element.append(ul);

  const dataKeys = Object.keys(data);

  for (const key of dataKeys) {
    const li = document.createElement('li');

    li.innerHTML = key;

    ul.append(li);

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
