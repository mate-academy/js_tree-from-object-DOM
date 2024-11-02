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

const body = document.querySelector('body');
const div = document.createElement('div');

div.setAttribute('id', 'tree');
body.prepend(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    createTree(li, data[key]);

    ul.append(li);
  }

  element.append(ul);
}

createTree(tree, food);
