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
  const ul = document.createElement('ul');

  keys.forEach(item => {
    const li = document.createElement('li');

    li.textContent = item;

    if (data[item] && Object.keys(data[item]).length !== 0) {
      li.appendChild(createTree(element, data[item]));
    }

    ul.appendChild(li);
    element.appendChild(ul);
  });

  return ul;
}

createTree(tree, food);
