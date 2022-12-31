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

  if (!keys.length) {
    return;
  }

  const ul = document.createElement('ul');

  keys.forEach(key => {
    const li = document.createElement('li');

    li.innerHTML = key;
    createTree(li, data[key]);

    ul.append(li);
  });

  element.append(ul);
}

createTree(tree, food);
