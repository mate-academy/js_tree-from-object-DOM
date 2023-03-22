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

  for (const property in data) {
    const li = document.createElement('li');

    li.innerText = property;
    ul.append(li);
    createTree(li, data[property]);
    element.append(ul);
  }
}

createTree(tree, food);
