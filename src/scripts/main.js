'use strict';

// const { utils } = require("stylelint");

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  element.append(createDom(data));
}

const createDom = data => {
  const list = document.createElement('ul');

  Object.keys(data).forEach(element => {
    const listItem = document.createElement('li');

    listItem.textContent = element;

    if (Object.keys(data[element]).length) {
      const childrenList = createDom(data[element]);

      listItem.append(childrenList);
    }

    list.append(listItem);
  });

  return list;
};

createTree(tree, food);
