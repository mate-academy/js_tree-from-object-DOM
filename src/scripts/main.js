'use strict';

//const { createElement } = require("react");

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

  if (!data || typeof data !== 'object') return;
  if (!data || !Object.keys(data).length) return;

  const ul = document.createElement('ul');

  for (const objs in data) {
    const newel = document.createElement('li');
    newel.textContent = objs;

    createTree(newel, data[objs]);

    ul.append(newel);
  }

  element.append(ul);
}

createTree(tree, food);
