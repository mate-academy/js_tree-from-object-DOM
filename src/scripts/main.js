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
  const keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    const li = document.createElement('li');

    li.textContent = keys[i];
    ul.append(li);

    if (Object.keys(data[keys[i]]) !== null) {
      createTree(ul, data[keys[i]]);
    }
  }

  element.append(ul);

  return element;
}

createTree(tree, food);
