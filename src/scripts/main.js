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

  element.append(ul);

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(value).length) {
      createTree(li, value);
    }

    ul.append(li);
  }
}

createTree(tree, food);
