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
  for (const key in data) {
    if (typeof (data[key]) === 'object') {
      const ul = document.createElement('ul');
      const li = document.createElement('li');

      li.innerText = key;
      ul.append(li);

      element.append(ul);
      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);
