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

  for (const item of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = item;

    ul.append(li);

    element.append(ul);

    if (item) {
      createTree(li, data[item]);
    }
  }
}

createTree(tree, food);
