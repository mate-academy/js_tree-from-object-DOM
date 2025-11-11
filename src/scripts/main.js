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

function hasNestedData(obj) {
  const isObject = typeof obj === 'object' && obj !== null;
  const hasKeys = Object.keys(obj).length > 0;

  return isObject && hasKeys;
}

function createTree(element, data) {
  const ul = document.createElement('ul');
  const keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const li = document.createElement('li');

    li.textContent = key;

    const value = data[key];

    if (hasNestedData(value)) {
      createTree(li, value);
    }

    ul.append(li);
  }

  element.append(ul);
}

createTree(tree, food);
