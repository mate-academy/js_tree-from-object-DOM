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
  for (const foodType in data) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');

    li.textContent = foodType;

    createTree(ul, data[foodType]);

    if (ul.hasChildNodes()) {
      li.append(ul);
    }

    element.append(li);
  }
}

createTree(tree, food);
