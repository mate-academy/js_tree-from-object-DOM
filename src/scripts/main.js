/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-unused-vars */
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
  if (!element) {
    return;
  }

  const floor = document.createElement('ul');
  const keys = Object.keys(data);

  keys.forEach((key) => {
    const li = document.createElement('li');
    li.textContent = key;
    floor.append(li);

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  });

  element.append(floor);
}

createTree(tree, food);
