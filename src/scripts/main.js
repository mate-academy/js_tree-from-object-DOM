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
  if (!Object.keys(data).length) {
    return;
  }

  for (const key in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.innerHTML = key;
    ul.append(li);
    element.append(ul);
    createTree(ul, data[key]);
  }
}

createTree(tree, food);
