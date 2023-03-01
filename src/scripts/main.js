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
  const dataKeys = Object.keys(data);

  dataKeys.forEach((key) => {
    const li = document.createElement('li');

    li.innerHTML = key;

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }

    ul.append(li);
  });

  element.append(ul);
}

createTree(tree, food);
