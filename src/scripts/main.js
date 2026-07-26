function createTree(element, data) {
  'use strict';

  if (typeof data !== 'object' || data === null) {
    return;
  }

  const mainUlElement = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    if (data.hasOwnProperty(key)) {
      const liElement = document.createElement('li');

      liElement.innerText = key;

      const nestedData = data[key];

      if (
        typeof nestedData === 'object' &&
        nestedData !== null &&
        Object.keys(nestedData).length > 0
      ) {
        createTree(liElement, nestedData);
      }
      mainUlElement.append(liElement);
    }
  });

  if (mainUlElement.children.length > 0) {
    element.append(mainUlElement);
  }
}

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

if (tree) {
  createTree(tree, food);
}
