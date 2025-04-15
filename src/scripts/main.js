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

  Object.entries(data).forEach(([key, nestedData]) => {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(nestedData).length) {
      createTree(li, nestedData);
    }

    ul.appendChild(li);
  });

  element.appendChild(ul);
}

createTree(tree, food);
