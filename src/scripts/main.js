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
  if (!data || Object.keys(data).length === 0) {
    return;
  }

  const elementUl = document.createElement('ul');

  for (const key in data) {
    const keyLi = document.createElement('li');

    keyLi.append(key);

    if (Object.keys(data[key]).length > 0) {
      createTree(keyLi, data[key]);
    }

    elementUl.append(keyLi);
  }

  element.append(elementUl);
}

createTree(tree, food);
