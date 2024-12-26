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

function createTree(parentList, dataObject) {
  for (const key in dataObject) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(dataObject[key]).length > 0) {
      const ul = document.createElement('ul');

      li.appendChild(ul);
      createTree(ul, dataObject[key]);
    }

    parentList.appendChild(li);
  }
}

createTree(tree, food);
