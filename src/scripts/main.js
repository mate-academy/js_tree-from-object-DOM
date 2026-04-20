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
  const newul = document.createElement('ul');

  for (const key in data) {
    const newli = document.createElement('li');

    newli.textContent = key;

    if (Object.keys(data[key]).length !== 0) {
      createTree(newli, data[key]);
    }

    newul.append(newli);
  }

  element.append(newul);
}

createTree(tree, food);
