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
  const key = Object.keys(data);
  const values = Object.values(data);

  for (let i = 0; i < key.length; i++) {
    const lists = document.createElement('li');

    lists.textContent = key[i];
    list.append(lists);

    if (Object.keys(values[i]).length !== 0) {
      createTree(list, values[i]);
    }
  }
  element.append(list);
}

createTree(tree, food);
