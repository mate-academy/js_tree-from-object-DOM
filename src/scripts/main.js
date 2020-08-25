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
  if (Object.keys(data).length === 0) {
    return true;
  }

  const ul = document.createElement('ul');

  ul.className = 'fruit';
  element.append(ul);

  for (const key in data) {
    const li = document.createElement('li');

    li.className = 'fruit';
    li.textContent = key;
    createTree(li, data[key]);
    ul.append(li);
  }
}

createTree(tree, food);
