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
  const mainContainer = element || document.body;

  for (const key in data) {
    const newUl = document.createElement('ul');
    const newLi = document.createElement('li');

    mainContainer.append(newUl);
    newLi.textContent = key;
    newUl.append(newLi);

    if (Object.keys(data[key]).length !== 0) {
      createTree(newLi, data[key]);
    }
  }
}

createTree(tree, food);
