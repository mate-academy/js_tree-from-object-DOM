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

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      const nestedUl = createTree(element, data[key]);

      li.appendChild(nestedUl);
    }
    ul.appendChild(li);
  }
  element.appendChild(ul);

  return ul;
}

createTree(tree, food);
