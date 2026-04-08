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
  const keys = Object.keys(data);
  const ul = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.append(li);

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  }
  element.append(ul);
}

createTree(tree, food);
