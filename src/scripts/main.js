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

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    list.append(li);
    li.textContent = key;

    if (Object.values(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
