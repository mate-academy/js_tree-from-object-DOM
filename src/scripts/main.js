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
  const arrOfLi = Object.keys(data);

  if (arrOfLi.length > 0) {
    element.append(ul);

    for (const key of arrOfLi) {
      const li = document.createElement('li');

      li.textContent = key;
      ul.append(li);

      if (typeof data[key] === 'object') {
        createTree(li, data[key]);
      }
    }
  }
}

createTree(tree, food);
