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
  element.innerHTML = createTreeDom(data);
}

createTree(tree, food);

function createTreeDom(obj) {
  let li = '';
  let ul;

  for (const key in obj) {
    li += '<li>' + key + createTreeDom(obj[key]) + '</li>';

    if (li) {
      ul = '<ul>' + li + '</ul>';
    }
  }

  return ul || '';
}
