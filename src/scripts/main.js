'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  if (data === {}) {
    return '';
  } else {
    const ul = document.createElement('ul');

    element.append(ul);

    let newData = {};

    for (const key in data) {
      const li = document.createElement('li');

      ul.append(li);
      li.textContent = key;

      newData = data[key];
      createTree(li, newData);
    }
  }
}

createTree(tree, food);
