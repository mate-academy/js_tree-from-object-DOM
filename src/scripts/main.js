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
  const list = document.createElement('ul');

  element.append(list);

  for (const i in data) {
    if (data.hasOwnProperty(i)) {
      const item = document.createElement('li');

      item.textContent = i;
      list.appendChild(item);

      if (Object.keys(data[i]).length) {
        createTree(item, data[i]);
      }
    }
  }
}

createTree(tree, food);
