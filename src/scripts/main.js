'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
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

  for (const value in data) {
    const li = document.createElement('li');

    li.textContent = value;
    ul.append(li);

    if (Object.keys(data[value]).length > 0) {
      createTree(li, data[value]);
    };
  }
}

createTree(tree, food);
