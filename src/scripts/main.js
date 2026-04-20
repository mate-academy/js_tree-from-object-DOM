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

const isEmptyObj = (obj) => {
  return Object.values(obj).every((value) => Object.keys(value).length === 0);
};

function createTree(element, data) {
  if (isEmptyObj(data)) {
    const nextUlElement = document.createElement('ul');

    Object.keys(data).forEach((item) => {
      const liItem = document.createElement('li');

      liItem.textContent = item;
      nextUlElement.append(liItem);
    });

    element.append(nextUlElement);

    return;
  }

  const ulElement = document.createElement('ul');

  Object.entries(data).map(([key, value]) => {
    const liItem = document.createElement('li');

    liItem.textContent = key;
    ulElement.append(liItem);

    createTree(liItem, value);
  });

  element.append(ulElement);
}

createTree(tree, food);
