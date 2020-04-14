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

  for (const item in data) {
    if (typeof data[item] === 'object') {
      const li = document.createElement('li');

      li.innerHTML = item;
      ul.append(li);
      element.append(ul);
      createTree(ul, data[item]);
    }
  }
}

createTree(tree, food);
