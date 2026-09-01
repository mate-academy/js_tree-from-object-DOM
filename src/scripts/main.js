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

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;
    ul.appendChild(li);
  }

  return document.body.appendChild(ul);
}

createTree(tree, food);
