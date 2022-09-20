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
  for (const el in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.innerHTML = el;
    ul.append(li);
    element.append(ul);

    if (Object.keys(data[el]).length > 0) {
      createTree(li, data[el]);
    }
  }
}

createTree(tree, food);
