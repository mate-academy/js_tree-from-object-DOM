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
  for (const item in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    element.append(ul);
    li.innerHTML = item;
    ul.append(li);

    if (Object.keys(data[item]).length > 0) {
      createTree(li, data[item]);
    }
  }
}

createTree(tree, food);
