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
  if (Object.keys(data).length !== 0) {
    const newUlMain = document.createElement('ul');

    element.append(newUlMain);

    for (const key in data) {
      const newLi = document.createElement('li');

      newLi.textContent = key;
      newUlMain.append(newLi);

      createTree(newLi, data[key]);
    }
  }
}

createTree(tree, food);
