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
  element.append(createList(data));
}

function createList(data) {
  const ul = document.createElement('ul');

  if (Object.keys(data).length === 0) {
    return '';
  }

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;
    ul.append(li);
    ul.append(createList(data[key]));
  }

  return ul;
}

createTree(tree, food);
