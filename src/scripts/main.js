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
  const list = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');

    li.innerText = key;

    if (Object.keys(data[key]).length) {
      createTree(li, data[key]);
    }
    list.append(li);
  };

  element.append(list);
}

createTree(tree, food);
