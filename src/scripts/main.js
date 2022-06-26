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
  const keysObj = Object.keys(data);

  if (keysObj.length !== 0) {
    const ul = document.createElement('ul');

    element.append(ul);

    for (const key of keysObj) {
      const li = document.createElement('li');

      ul.append(li);
      li.innerText = key;
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
