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
  const unList = document.createElement('ul');

  for (const el in data) {
    const li = document.createElement('li');

    li.textContent = el;
    unList.append(li);

    if (Object.keys(data[el]).length > 0) {
      createTree(li, data[el]);
    }
  }

  element.append(unList);
}

createTree(tree, food);
