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
  if (Object.keys(data).length) {
    const ul = document.createElement('ul');

    element.appendChild(ul);

    for (const key in data) {
      const li = document.createElement('li');

      li.innerText = key;
      ul.append(li);

      if (data.hasOwnProperty(key)) {
        createTree(li, data[key]);
      }
    }
  }
}

createTree(tree, food);
