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

  for (const el in data) {
    const li = document.createElement('li');

    li.textContent = el;

    if (Object.keys(data[el]).length !== 0) {
      createTree(li, data[el]);
    }
    ul.append(li);
  }

  element.append(ul);
}

createTree(tree, food);
