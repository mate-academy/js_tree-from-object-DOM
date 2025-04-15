/* eslint-disable no-console */
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

const div = document.createElement('div');

div.setAttribute('id', 'tree');

const body = document.querySelector('body');

body.appendChild(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (Object.keys(data).length === 0 || typeof data !== 'object') {
    return;
  }

  const ul = document.createElement('ul');

  element.appendChild(ul);

  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;

    ul.appendChild(li);

    createTree(li, data[item]);
  }
}

createTree(tree, food);
