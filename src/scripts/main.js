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
  for (let key in data) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = key;
    if (Object.keys(data[key]).length) {
      createTree(li, data[key]);
    }
    ul.append(li);
    element.append(ul);
  }
}

createTree(tree, food)
