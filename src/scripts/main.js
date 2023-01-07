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

  for (const part in data) {
    const li = document.createElement('li');

    li.innerText = part;

    if (Object.keys(data[part]).length > 1) {
      createTree(li, data[part]);
    }

    ul.append(li);
  }

  element.append(ul);
}

createTree(tree, food);
