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
  function isEmpty(obj) {
    for (const key in obj) {
      return false;
    }

    return true;
  }

  if (isEmpty(data)) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.append(li);

    createTree(li, data[key]);
  }

  element.append(ul);
}

createTree(tree, food);
