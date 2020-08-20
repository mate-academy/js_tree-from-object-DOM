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
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');

  element.append(ul);

  if (Object.entries(data).length === 0) {

  } else {
    for (const key in data) {
      const li = document.createElement('li');

      li.textContent = key;
      ul.append(li);
      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);
