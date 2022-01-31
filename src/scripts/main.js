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
  element.appendChild(createTreeDom(data));
}

createTree(tree, food);

function createTreeDom(obj) {
  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');

    li.innerHTML = key;

    if (Object.keys(obj[key]).length) {
      li.appendChild(createTreeDom(obj[key]));
    };

    ul.appendChild(li);
  }

  return ul;
}
