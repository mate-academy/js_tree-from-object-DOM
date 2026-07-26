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
  const ul = document.createElement('ul');

  for (const prop in data) {
    const li = document.createElement('li');

    li.textContent = prop;
    ul.append(li);
    element.append(ul);

    createTree(li, data[prop]);
  }
}

createTree(tree, food);
