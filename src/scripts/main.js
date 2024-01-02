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

  element.append(list);

  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;
    list.append(li);

    if (Object.keys(data[item]).length > 0) {
      createTree(li, data[item]);
    }
  }
}

createTree(tree, food);
