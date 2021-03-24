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
  if (element) {
    const elementUl = document.createElement('ul');

    element.append(elementUl);

    for (const item in data) {
      const elementLi = document.createElement('li');

      elementLi.textContent = item;
      elementUl.append(elementLi);

      if (Object.keys(data[item]).length > 0) {
        createTree(elementLi, data[item]);
      }
    }
  }
}

createTree(tree, food);
