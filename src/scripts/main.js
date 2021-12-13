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
  const ul = document.createElement('ul');

  for (const el in data) {
    const li = document.createElement('li');

    li.innerHTML = el;
    ul.append(li);

    if (typeof data[el] === 'object' && Object.keys(data[el]).length > 0) {
      createTree(li, data[el]);
    }
  }
  element.append(ul);
}

createTree(tree, food);
