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
  const mainUl = document.createElement('ul');

  element.insertAdjacentElement('beforeend', mainUl);

  for (const key in data) {
    const li = document.createElement('li');

    li.append(key);

    mainUl.insertAdjacentElement('beforeend', li);

    if (Object.keys(data[key]).length) {
      createTree(mainUl, data[key]);
    }
  }
}

createTree(tree, food);
