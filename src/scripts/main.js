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

  for (const obj in data) {
    const li = document.createElement('li');

    li.textContent = obj;
    list.append(li);

    if (Object.keys(data[obj]).length > 0) {
      createTree(list, data[obj]);
    }
  }

  element.append(list);
}

createTree(tree, food);
