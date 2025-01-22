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

createTree(tree, food);

function createTree(element, data) {
    element.innerHTML = createTreeHTML(data);
}

function createTreeHTML(obj) {
  let liItems = '';
  let ul;

  for (const key in obj) {
    liItems += `<li>${key}${createTreeHTML(obj[key])}</li>`
  }

  if (liItems) {
    ul = `<ul>${liItems}</ul>`;
  }

  return ul || '';
}
