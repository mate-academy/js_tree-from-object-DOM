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
  if (Object.keys(element).length !== 0) {
    const protoUl = document.createElement('ul');

    for (const key in element) {
      const protoLi = document.createElement('li');

      data.append(protoUl);
      protoUl.append(protoLi);
      protoLi.textContent = key;

      if (Object.keys(element[key]).length !== 0) {
        createTree(element[key], protoLi);
      }
    }
  }
}

/* function test(element) {
  debugger;
  if (Object.keys(element).length !== 0) {
    for (const key in element) {
      console.log(key);
      if (Object.keys(element[key]).length !== 0) {
        test(element[key]);
      }
    }
  }
} */

createTree(tree, food);
