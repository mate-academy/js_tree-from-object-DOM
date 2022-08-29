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
  const elementList = document.createElement('ul');

  element.append(elementList);

  for (const object in data) {
    const headItem = document.createElement('li');

    headItem.innerText = object;
    elementList.append(headItem);

    const objOfHeadItem = data[object];

    if (Object.keys(objOfHeadItem).length > 0) {
      for (const key in objOfHeadItem) {
        if (Object.keys(objOfHeadItem[key]).length === 0) {
          const innerList = document.createElement('ul');
          const innerItem = document.createElement('li');

          innerItem.innerText = key;
          innerList.append(innerItem);
          headItem.append(innerList);
        } else {
          return createTree(headItem, objOfHeadItem);
        }
      }
    }
  }
}

createTree(tree, food);
