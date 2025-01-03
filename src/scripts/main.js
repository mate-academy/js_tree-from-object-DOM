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

const bodyElement = document.body;
bodyElement.setAttribute('id', 'tree');

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const li = document.createElement('li');
    li.textContent = key;

    createTree(li, data[key]);
    ul.appendChild(li);
  });

  element.appendChild(ul);
}

createTree(tree, food);
