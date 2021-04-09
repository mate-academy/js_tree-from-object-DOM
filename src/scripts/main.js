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

  for (const category in data) {
    const li = document.createElement('li');

    li.textContent = category;
    ul.append(li);

    if (Object.keys(data[category]).length !== 0) {
      createTree(li, data[category]);
    }
  }

  element.append(ul);
}

createTree(tree, food);
