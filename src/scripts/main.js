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
  function recursion(obj, DOMparent) {
    if (Object.keys(obj).length !== 0) {
      const UL = document.createElement('ul');

      for (const key in obj) {
        const LI = document.createElement('li');

        LI.textContent = key;
        UL.appendChild(LI);

        if (typeof obj[key] === 'object') {
          recursion(obj[key], UL);
        }
      };
      DOMparent.append(UL);
    } else {
      return;
    };
  };
  recursion(data, element);
};
createTree(tree, food);
