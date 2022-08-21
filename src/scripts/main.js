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
  for (const key in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    if (data.hasOwnProperty(key)) {
      createTree(ul, data[key]);
    }

    li.innerHTML = `${key}`;
    ul.prepend(li);
    element.append(ul);
  }
}

createTree(tree, food);
