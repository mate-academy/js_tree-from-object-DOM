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
  const keys = Object.keys(data);

  if (keys.length > 0) {
    const ul = document.createElement(`ul`);

    element.append(ul);

    for (const key of keys) {
      const li = document.createElement(`li`);

      li.innerText = key;
      ul.append(li);
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
