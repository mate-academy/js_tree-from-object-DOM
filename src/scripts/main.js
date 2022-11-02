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
  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.innerText = key;
    ul.append(li);
    element.append(ul);

    createTree(li, data[key]);
  };
}

createTree(tree, food);
