'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  const uL = document.createElement('ul');

  element.append(uL);

  for (const prop in data) {
    if (typeof (data[prop]) === 'object') {
      const lI = document.createElement('li');

      lI.innerHTML = prop;
      uL.append(lI);
      createTree(uL, data[prop]);
    } else {
      return;
    }
  }
}

createTree(tree, food);
