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
    const currentObject = data[key];
    const li = document.createElement('li');

    li.textContent = key;

    const keys = Object.keys(currentObject);

    if (keys.length > 0) {
      createTree(li, currentObject);
    }
    ul.append(li);
  }
  element.append(ul);
}

createTree(tree, food);
