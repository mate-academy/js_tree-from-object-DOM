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
  if (!Object.keys(data).length) {
    return '';
  }

  element.innerHTML = `
    <ul>
      ${Object.keys(data).map(li => `
        <li>${li}${createTree(element, data[li])}
      </li>`).join('')}
    </ul>
  `;

  return element.innerHTML;
}

createTree(tree, food);
