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
  const list = document.createElement('ul');

  for (const key of data) {
    const li = document.createElement('li');

    li.textContent = key;
    element.append(list);
    list.append(li);

    if (Object.values(data[key].length > 0)) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
