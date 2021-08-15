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
  const list = document.createElement('ul');
  const keysData = Object.keys(data);
  const valuesData = Object.values(data);

  element.append(list);

  for (let i = 0; i < keysData.length; i++) {
    const listItem = document.createElement('li');

    listItem.textContent = keysData[i];
    list.append(listItem);

    if (Object.keys(valuesData[i]).length !== 0) {
      createTree(list, valuesData[i]);
    }
  }
}

createTree(tree, food);
