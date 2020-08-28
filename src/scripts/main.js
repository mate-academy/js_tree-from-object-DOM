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
    const li = document.createElement('li');

    li.innerText = item;
    ul.append(li);

    if (typeof data[item] === 'object') {
      createTree(li, data[item]);
    }

    element.append(ul);
  }
}

createTree(tree, food);
