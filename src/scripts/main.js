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
const tree = document.createElement('div');

tree.setAttribute('id', 'tree');

body.append(tree);

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const list = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const listItem = document.createElement('li');

    listItem.textContent = key;
    list.appendChild(listItem);

    if (Object.keys(value).length > 0) {
      createTree(listItem, value);
    }
  }
  element.appendChild(list);
}

createTree(tree, food);
