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

  element.append(ul);

  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;
    ul.append(li);

    if (Object.values(data[item])) {
      createTree(li, data[item]);
    }
  }
  // WRITE YOUR CODE HERE
}

createTree(tree, food);
