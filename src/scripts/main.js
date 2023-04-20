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
  if (Object.keys(data).length) {
    for (const key in data) {
      const list = document.createElement('UL');
      const li = document.createElement('LI');

      li.innerText = key;
      list.append(li);
      element.append(list);
      createTree(list, data[key]);
    }
  }
}

createTree(tree, food);
