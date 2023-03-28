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
  // WRITE YOUR CODE HERE

  for (const key in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    element.append(ul);
    ul.append(li);

    li.textContent = key;

    for (const item in createTree(li, data[key])) {
      const ul2 = document.createElement('ul');
      const li2 = document.createElement('li');

      li.append(ul2);
      ul2.append(li2);

      li2.textContent = item;
    }
  }
}

createTree(tree, food);
