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

// const tree = document.querySelector('#tree');

const tree = document.querySelector('body');

tree.id = 'tree';

function createTree(element, data) {
  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = key;
    element.appendChild(li);

    if (Object.keys(data[key]).length !== 0) {
      const ulNested = document.createElement('ul');

      li.appendChild(ulNested);
      createTree(ulNested, data[key]);
    }
  }
}

createTree(tree, food);
