'use strict';

// debugger;

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
  const dataList = Object.keys(data);
  const newUl = document.createElement('ul');

  for (const product in data) {
    const liProduct = document.createElement('li');

    liProduct.innerText = product;
    newUl.append(liProduct);

    if (dataList.length !== 0) {
      createTree(liProduct, data[product]);
    }
  }
  element.append(newUl);
}

createTree(tree, food);
