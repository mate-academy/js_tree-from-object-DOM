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

let tree = document.querySelector('#tree');

if (!tree) {
  const container = document.createElement('div');

  container.id = 'tree';
  document.body.appendChild(container);
  tree = container;
}

function buildList(obj) {
  const ul = document.createElement('ul');

  for (const key of Object.keys(obj)) {
    const li = document.createElement('li');

    li.textContent = key;

    const value = obj[key];

    if (
      typeof value === 'object' &&
      value !== null &&
      Object.keys(value).length > 0
    ) {
      li.appendChild(buildList(value));
    }

    ul.appendChild(li);
  }

  return ul;
}

function createTree(element, data) {
  element.innerHTML = '';

  const rootUI = buildList(data);

  element.appendChild(rootUI);
}

createTree(tree, food);
