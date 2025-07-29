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
  const dataArr = Object.entries(data);

  const ul = document.createElement('ul');

  for (const [key, value] of dataArr) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(value).length > 0) {
      createTree(li, value);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
