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

function createTree(element, data) {
  // WRITE YOUR CODE HERE

  element.append(createElement(data));
}

const tree = document.querySelector('#tree');

function createElement(obj) {
  if (!Object.keys(obj).length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const chaildUl = createElement(obj[key]);

    if (chaildUl) {
      li.append(chaildUl);
    }

    ul.append(li);
  }

  return ul;
}

createTree(tree, food);
