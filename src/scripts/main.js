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
  if (Object.keys(data).length === 0) {
    return false;
  } else {
    for (const [key, value] of Object.entries(data)) {
      const ul = document.createElement('ul');
      const li = document.createElement('li');

      li.textContent = key;

      ul.append(li);
      element.append(ul);
      createTree(li, value);
    }
  }
}
createTree(tree, food);
