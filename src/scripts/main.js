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
  document.body.innerHTML = `<ul id = "tree"></ul>`;

  for (const [key, x] of Object.entries(data)) {
    document.body.firstChild.innerHTML += `
      <li id = "${key}">${key}</li>
    `;

    for (const [key1, y] of Object.entries(x)) {
      document.querySelector(`#${key}`).innerHTML += `
        <ul class = "ul_2">
          <li id = "${key1}">${key1}</li>
        </ul>
      `;

      for (const key2 of Object.keys(y)) {
        document.querySelector(`#${key1}`).innerHTML += `
          <ul class = "ul_3">
            <li class = "item_3">${key2}</li>
          </ul>
        `;
      }
    }
  }
}

createTree(tree, food);
