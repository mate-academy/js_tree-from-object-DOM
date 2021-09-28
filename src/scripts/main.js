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

    li.innerText = item;
    ul.append(li);
    element.append(ul);

    if (Object.keys(data[item]).length > 0) {
      createTree(li, data[item]);
    }
  }
}

createTree(tree, food);
