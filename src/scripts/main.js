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

  for (const group in data) {
    const li = document.createElement('li');

    li.textContent = group;
    ul.append(li);

    if (Object.keys(data[group])) {
      createTree(li, data[group]);
    }
  }
}

createTree(tree, food);
