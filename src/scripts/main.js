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
  element.append(ul);

  for (const e in data) {
    const li = document.createElement('li');
    li.innerText = e;
    ul.append(li);

    if (data[e] !== {}) {
      createTree(li, data[e]);
    }
  }
}

createTree(tree, food);
