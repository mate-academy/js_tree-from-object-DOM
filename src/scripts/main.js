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
  if (!data || Object.keys(data).length === 0) {
    return;
  }

  const ulCreate = document.createElement('ul');

  for (const key in data) {
    const liCreate = document.createElement('li');

    liCreate.textContent = key;

    createTree(liCreate, data[key]);

    ulCreate.append(liCreate);
  }

  element.append(ulCreate);
}

createTree(tree, food);
