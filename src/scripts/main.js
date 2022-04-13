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
    return;
  }

  const ul = document.createElement('ul');

  for (const el in data) {
    const li = document.createElement('li');

    li.innerHTML = el;
    ul.append(li);

    createTree(ul, data[el]);
  }

  element.append(ul);
}

createTree(tree, food);
