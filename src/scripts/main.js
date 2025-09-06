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

const body = document.querySelector('body');

function createTree(element, data) {
  for (const [key, value] of Object.entries(data)) {
    if (Object.keys(value).length === 0) {
      const li = document.createElement('li');

      li.textContent = key;

      element.appendChild(li);
    } else {
      const outerLi = document.createElement('li');
      const innerUl = document.createElement('ul');

      outerLi.textContent = key;
      element.appendChild(outerLi);
      outerLi.appendChild(innerUl);

      createTree(innerUl, data[key]);
    }
  }
}

let mainUl = document.querySelector('ul');

if (!mainUl) {
  mainUl = document.createElement('ul');

  body.appendChild(mainUl);
}

createTree(mainUl, food);
