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
  element.innerHTML = `
  <ul>
    ${Object.keys(data).map(item => `
      <li>
        ${item}
      </li>
      ${createTree(element, data[item])}
    `).join('')}
  </ul>
  `;

  return element.innerHTML;
}

createTree(tree, food);
