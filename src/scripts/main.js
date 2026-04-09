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

function buildList(data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const value = data[key];
    const li = document.createElement('li');

    li.textContent = key;

    if (
      typeof value === 'object' &&
      value !== null &&
      Object.keys(value).length > 0
    ) {
      const childUl = buildList(value);

      li.appendChild(childUl);
    }

    ul.appendChild(li);
  }

  return ul;
}

function createTree(element, data) {
  const result = buildList(data);

  element.appendChild(result);
}

createTree(tree, food);
