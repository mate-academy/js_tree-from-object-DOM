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
  const ul = document.createElement('ul');

  element.append(ul);

  for (const item in data) {
    if (!Object.keys(data).length) {
      return;
    }

    const li = document.createElement('li');

    li.textContent = item;
    ul.append(li);

    if (Object.keys(data[item]).length) {
      createTree(li, data[item]);
    }
  }
}

createTree(tree, food);
