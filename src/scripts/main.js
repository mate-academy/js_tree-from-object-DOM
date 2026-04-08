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
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');
    li.textContent = key;

    const children = createSubTree(data[key]);

    if (children) {
      li.appendChild(children);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

function createSubTree(obj) {
  const keys = Object.keys(obj);

  if (!keys.length) {
    return null;
  }

  const ul = document.createElement('ul');

  keys.forEach(key => {
    const li = document.createElement('li');
    li.textContent = key;

    const children = createSubTree(obj[key]);

    if (children) {
      li.appendChild(children);
    }

    ul.appendChild(li);
  });

  return ul;
}

createTree(tree, food);
