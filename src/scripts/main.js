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
    const obj = Object.keys(data);

    element.insertAdjacentHTML('beforeend', `<ul></ul>`);

    const child = element.firstElementChild;

    for (const key of obj) {
      child.insertAdjacentHTML('beforeend', `
        <li>
          ${key}
        </li>
      `);

      createTree(child.lastElementChild, data[key]);
    }
  }
}

createTree(tree, food);
