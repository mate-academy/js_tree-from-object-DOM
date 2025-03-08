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
const body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', '<div id="tree"></div>');

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const unorderedList = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.innerText = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(listItem, data[key]);
    }

    unorderedList.append(listItem);
  }

  element.append(unorderedList);
}

createTree(tree, food);
