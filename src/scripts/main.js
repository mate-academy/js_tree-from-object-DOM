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
  tree.append(createList(data));

  function createList(obj) {
    if (Object.keys(obj).length) {
      const ul = document.createElement('ul');

      for (const key in obj) {
        const li = document.createElement('li');

        li.innerHTML = key;

        const ulChild = createList(obj[key]);

        if (ulChild) {
          li.append(ulChild);
        }

        ul.append(li);
      }

      return ul;
    }
  }
}

createTree(tree, food);
