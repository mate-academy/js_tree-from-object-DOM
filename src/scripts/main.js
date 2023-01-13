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

  element.append(ul);

  for (const item in data) {
    const li = document.createElement('li');

    li.innerText = item;

    ul.append(li);

    if (Object.keys(data[item]) !== 0) {
      createTree(ul, data[item]);
    }
  }
}

createTree(tree, food);
