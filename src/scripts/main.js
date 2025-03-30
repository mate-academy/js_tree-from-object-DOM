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
  element.innerHTML += `
    <ul></ul>
  `;

  for (const key in data) {
    const list = element.lastElementChild;

    list.innerHTML += `
      <li>${key}</li>
    `;

    const keys = Object.keys(data[key]);

    if (keys.length) {
      createTree(list, data[key]);
    }
  }
}

createTree(tree, food);
