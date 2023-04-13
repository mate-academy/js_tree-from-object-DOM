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
  // WRITE YOUR CODE HERE
  if (data) {
    const ulElem = document.createElement('ul');
    const dataKeys = Object.keys(data);

    if (dataKeys.length) {
      for (let i = 0; i < dataKeys.length; i++) {
        const liElem = document.createElement('li');

        liElem.textContent = dataKeys[i];
        ulElem.append(liElem);

        if (i === dataKeys.length - 1) {
          element.append(ulElem);
        }
        createTree(liElem, data[dataKeys[i]]);
      }
    }
  }
}

createTree(tree, food);
