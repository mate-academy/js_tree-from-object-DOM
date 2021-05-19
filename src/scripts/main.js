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
  const list = document.createElement('ul');

  element.appendChild(list);

  for (const key in data) {
    const li = document.createElement('li');

    li.innerText = key;
    list.appendChild(li);

    if (Object.keys(data[key]).length) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
