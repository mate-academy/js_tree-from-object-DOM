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
  for (const [key, value] of Object.entries(data)) {
    const newLi = document.createElement('li');

    newLi.innerText = key;

    if (Object.entries(value).length > 0) {
      const newUl = document.createElement('ul');

      createTree(newUl, value);

      newLi.append(newUl);
    }

    element.append(newLi);
  }
}

createTree(tree, food);
