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
  for (const key in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length) {
      ul.append(li);
      element.append(ul);

      createTree(li, data[key]);
    } else {
      if (!element.children.length > 0) {
        element.append(ul);
      };

      const lastListItemParent = element.querySelector('ul');

      lastListItemParent.append(li);
    }
  }
}
createTree(tree, food);
