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
  const ul = buildListFrom(data);

  element.appendChild(ul);
}

function buildListFrom(obj) {
  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');

    li.textContent = key;

    if (
      typeof obj[key] === 'object' &&
      obj[key] !== null &&
      Object.keys(obj[key]).length > 0
    ) {
      li.appendChild(buildListFrom(obj[key]));
    }

    ul.appendChild(li);
  }

  return ul;
}

createTree(tree, food);
