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

const tree = document.getElementById('tree');

function createTree(element, data) {
  for (const key in data) {
    const newData = {};
    const keys = Object.keys(data[key]);

    keys.map(keyIn => {
      newData[keyIn] = data[key][keyIn];

      return keyIn;
    });

    element.insertAdjacentHTML('beforeend', `
    <ul>
      <li>${key}</li>
    </ul>
    `);

    const li = [...document.querySelectorAll('li')];

    createTree(li[li.length - 1], newData);
  }
}

createTree(tree, food);
