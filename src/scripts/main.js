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
  element.append(createList(data));
}

function createList(obj) {
  const ul = document.createElement('ul');

  for (const [key, value] of Object.entries(obj)) {
    const li = document.createElement('li');

    li.textContent = key;

    if (value && typeof value === 'object' && Object.keys(value).length > 0) {
      const nestedUl = createList(value);

      li.appendChild(nestedUl);
    }

    ul.appendChild(li);
  }

  return ul;
}

if (tree) {
  createTree(tree, food);
}
