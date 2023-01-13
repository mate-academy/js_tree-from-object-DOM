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

  for (const el in data) {
    // console.log(data[el]);
    const li = document.createElement('li');

    li.textContent = el;

    if (data[el] !== {}) {
      createTree(li, data[el]);
    }

    ul.append(li);
  }
}

createTree(tree, food);
