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
    if (Object.keys(data[key]).length === 0) {
      const li = document.createElement('li');

      li.innerHTML = key;
      li.style.margin = '0 0 0 50px';
      element.append(li);
    } else {
      const ul = document.createElement('ul');

      ul.innerHTML = key;
      element.append(ul);

      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);
