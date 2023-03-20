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

  for (const elem in data) {
    const li = document.createElement('li');

    li.textContent = elem;
    list.append(li);

    if (Object.keys(data[elem]).length > 0) {
      createTree(li, data[elem]);
    }
  }

  element.append(list);
}

createTree(tree, food);
