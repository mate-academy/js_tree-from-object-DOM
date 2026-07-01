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
  const entries = Object.entries(data);

  if (entries.length === 0) {
    return;
  }

  const elementUl = document.createElement('ul');

  for (const [key, value] of entries) {
    const elementLi = document.createElement('li');

    elementLi.textContent = key;
    elementUl.append(elementLi);

    createTree(elementLi, value);
  }

  element.append(elementUl);
}

createTree(tree, food);
