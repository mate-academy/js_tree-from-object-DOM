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

//
function createTree(element, data) {
  const ulElement = document.createElement('ul');

  for (const keys in data) {
    const liElement = document.createElement('li');
    liElement.innerText = keys;
    ulElement.append(liElement);
    element.append(ulElement);

    if (data[keys]) {
      createTree(liElement, data[keys]);
    }
  }
}

createTree(tree, food);
