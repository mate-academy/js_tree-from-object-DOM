'use strict';

document.addEventListener('DOMContentLoaded', function() {
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

    for (const key in data) {
      const li = document.createElement('li');

      li.textContent = key;

      if (typeof data[key] === 'object') {
        li.appendChild(createTree(element, data[key]));
      }

      ul.appendChild(li);
    }

    return ul;
  }

  const root = createTree(tree, food);

  tree.appendChild(root);
});
