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

  Object.entries(data).forEach(([key, value]) => {
    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);

    if (Object.keys(value).length > 0) {
      createTree(li, value);
    }

    if (element) {
      element.appendChild(ul);
    } else {
      document.body.appendChild(ul);
    }
  });
}

createTree(tree, food);
