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

  const ulElem = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;
    ulElem.appendChild(li);

    createTree(li, data[key]);
  }
  element.appendChild(ulElem);
}

createTree(tree, food);
