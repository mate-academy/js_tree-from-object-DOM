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
  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  const ulEl = document.createElement('ul');

  keys.forEach((el) => {
    const elLi = document.createElement('li');

    elLi.textContent = el;
    createTree(elLi, data[el]);
    ulEl.insertAdjacentElement('beforeend', elLi);
  });

  element.insertAdjacentElement('beforeend', ulEl);
}

createTree(tree, food);
