'use strict';

const food = {
  Meat: {
    Pork: {},
    Beef: {},
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
  Vegetables: {
    Green: {
      Cucamber: {},
      Cubbage: {},
      Broccoli: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  element.innerHTML += getListHtml(data);
}

function getListHtml(data) {
  if (!Object.keys(data).length) {
    return '';
  }

  return `
    <ul>
      ${Object.keys(data).map(key => `

        <li>${key}${getListHtml(data[key])}</li>
        
      `).join('')}
    </ul>
  `;
}

createTree(tree, food);
