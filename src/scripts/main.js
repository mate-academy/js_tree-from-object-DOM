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
  const keys = Object.keys(data);
  const ul = document.createElement('ul');

  keys.forEach(key => {
    const li = document.createElement('li');

    li.innerText = key;

    const childKeys = Object.keys(data[key]);

    if (childKeys.length) {
      createTree(li, data[key]);
    }
    ul.append(li);
  });

  element.append(ul);
}

createTree(tree, food);
