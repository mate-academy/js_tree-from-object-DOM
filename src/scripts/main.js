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

export function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  const entries = Object.entries(data);

  if (entries.length === 0) {
    return;
  }

  const list = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    createTree(li, value);

    list.append(li);
  }

  element.append(list);
}

if (tree) {
  createTree(tree, food);
}
