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
  element.append(createTreeDom(data));
}

function createTreeDom(data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.innerText = key;

    if (Object.keys(data[key]).length) {
      li.append(createTreeDom(data[key]));
    }

    ul.append(li);
  }

  return ul;
}

createTree(tree, food);
