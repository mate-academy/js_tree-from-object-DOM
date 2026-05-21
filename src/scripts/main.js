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
  if (Object.keys(data).length === 0) {
    return;
  }

  const ourUl = document.createElement('ul');

  for (const key in data) {
    const ourLi = document.createElement('li');

    ourLi.textContent = key;
    createTree(ourLi, data[key]);
    ourUl.append(ourLi);
  }

  element.append(ourUl);
}

createTree(tree, food);
