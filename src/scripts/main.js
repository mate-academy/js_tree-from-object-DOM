'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree') || document.querySelector('.tree');

function createTree(element, data) {
  if (!element || !data) {
    return;
  }

  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  keys.forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;
    createTree(li, data[key]);
    ul.append(li);
  });

  if (element) {
    element.append(ul);
  }
}

if (tree) {
  createTree(tree, food);
}
