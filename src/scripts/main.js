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

  element.appendChild(list);

  Object.keys(data).forEach((obj) => {
    const li = document.createElement('li');

    li.textContent = obj;
    list.appendChild(li);

    if (Object.keys(data[obj]).length > 0) {
      createTree(li, data[obj]);
    }
  });
}

createTree(tree, food);
