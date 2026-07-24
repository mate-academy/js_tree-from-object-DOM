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

  const categories = Object.keys(data);

  for (const category of categories) {
    const listElement = document.createElement('li');

    listElement.textContent = category;
    list.append(listElement);

    if (Object.keys(data[category]).length > 0) {
      createTree(listElement, data[category]);
    }
  }
}

createTree(tree, food);
