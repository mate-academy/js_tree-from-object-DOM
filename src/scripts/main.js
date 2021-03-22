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
  if (element) {
    const ulElem = document.createElement('ul');

    element.append(ulElem);

    for (const type in data) {
      const liElem = document.createElement('li');

      liElem.textContent = type;
      ulElem.append(liElem);

      const innerData = data[type];

      if (Object.keys(innerData).length > 0) {
        createTree(liElem, innerData);
      }
    }
  }
}

createTree(tree, food);
