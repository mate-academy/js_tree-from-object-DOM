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
  const listItems = Object.keys(data);

  if (listItems.length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const item of listItems) {
    const li = document.createElement('li');

    li.textContent = item;
    createTree(li, data[item]);
    ul.append(li);
  }

  element.append(ul);
}

createTree(tree, food);
