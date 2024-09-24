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

  element.appendChild(ul);

  for (const entry of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = entry[0];
    ul.appendChild(li);

    if (Object.keys(entry[1]).length > 0) {
      const newUl = document.createElement('ul');

      element.appendChild(newUl);
      createTree(li, entry[1]);
    }
  }
}

createTree(tree, food);
