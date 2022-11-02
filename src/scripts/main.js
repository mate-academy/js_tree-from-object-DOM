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

function createTree(element, data, listType = 'ul') {
  // WRITE YOUR CODE HERE
  const mainList = document.createElement('ul');

  for (const product in data) {
    const listItem = document.createElement('li');

    listItem.innerText = product;

    if (typeof data[product] === 'object'
      && Object.keys(data[product]).length > 0) {
      createTree(listItem, data[product]);
    }

    mainList.appendChild(listItem);
  }

  element.appendChild(mainList);
}

createTree(tree, food);
