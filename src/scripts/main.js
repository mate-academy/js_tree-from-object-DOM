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
  function createList(obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');

      li.textContent = key;
      ul.appendChild(li);

      if (typeof obj[key] === 'object' && Object.keys(obj[key].length > 0)) {
        li.appendChild(createList(obj[key]));
      }
    }

    return ul;
  }

  const list = createList(data);

  element.appendChild(list);
}

createTree(tree, food);
