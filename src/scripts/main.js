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

  for (const key in data) {
    const newLi = document.createElement('li');

    newLi.innerText = key;
    list.append(newLi);

    if (Object.keys(data[key]).length > 0) {
      createTree(newLi, data[key]);
    }
  }

  element.append(list);
}

createTree(tree, food);
