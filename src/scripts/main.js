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

  for (const obj in data) {
    const li = document.createElement('li');

    li.textContent = obj;

    if (Object.keys(data[obj]).length > 0) {
      createTree(li, data[obj]);
    }
    ul.append(li);
  }
  element.append(ul);
}

createTree(tree, food);
