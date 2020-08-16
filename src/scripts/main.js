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

  for (const i in data) {
    const li = document.createElement('li');

    li.textContent = i;
    ul.append(li);

    if (Object.keys(data[i]).length > 0) {
      createTree(ul, data[i]);
    }
  }
}

createTree(tree, food);
