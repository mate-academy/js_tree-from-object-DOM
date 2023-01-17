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

  element.insertAdjacentElement('beforeend', ul);

  if (!Object.keys(data)) {
    return;
  }

  for (const key in data) {
    if (Object.keys(key)) {
      const list = document.createElement('li');

      list.innerText = key;

      ul.append(list);

      createTree(list, data[key]);
    }
  }
}

createTree(tree, food);
