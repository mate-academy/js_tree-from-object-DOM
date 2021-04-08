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
  if (Object.keys(data).length === 0) {
    return;
  };

  const ul = document.createElement('ul');

  element.appendChild(ul);

  for (const key in data) {
    const li = document.createElement('li');

    li.innerText = key;
    ul.appendChild(li);

    createTree(li, data[key]);
  }
}

createTree(tree, food);
