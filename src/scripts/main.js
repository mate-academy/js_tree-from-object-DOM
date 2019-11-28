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
  const ul = document.createElement('ul');

  for (const key in data) {
    if (typeof (data[key]) === 'object') {
      const li = document.createElement('li');

      li.innerText = key;
      ul.append(li);
      createTree(ul, data[key]);
      element.append(ul);
    }
  }
}

createTree(tree, food);
