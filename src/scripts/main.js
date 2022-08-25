'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
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
  createStick(data);

  function createStick(newData) {
    const list = document.createElement('ul');

    for (let i = 0; i < Object.keys(newData).length; i++) {
      const listItem = document.createElement('li');
      const nextList = Object.entries(newData[Object.keys(newData)[i]]);

      listItem.textContent = Object.keys(newData)[i];
      list.append(listItem);

      if (nextList.length > 0) {
        createTree(list, newData[Object.keys(newData)[i]]);
      }
    }

    element.append(list);
  }
}

createTree(tree, food);
