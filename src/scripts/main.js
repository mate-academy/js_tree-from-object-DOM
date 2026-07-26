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
  element.insertAdjacentHTML('beforeend', '<ul></ul>');

  for (const key in data) {
    element.lastElementChild.insertAdjacentHTML('beforeend', `<li>${key}</li>`);

    const currElem = element.lastElementChild.lastElementChild;

    if (Object.keys(data[key]).length > 0) {
      createTree(currElem, data[key]);
    }
  }
}

createTree(tree, food);
