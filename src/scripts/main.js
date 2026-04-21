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
  let rootList;

  if (Object.keys(data).length !== 0) {
    rootList = document.createElement('ul');
  } else {
    return;
  }

  for (const key in data) {
    const rootListItem = document.createElement('li');

    rootListItem.innerText = key;
    rootList.appendChild(rootListItem);

    createTree(rootListItem, data[key]);
  }

  element.appendChild(rootList);
}

createTree(tree, food);
