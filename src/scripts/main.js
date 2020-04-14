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
    return;
  }

  const ul = document.createElement('ul');

  element.append(ul);

  const value = Object.keys(data);

  for (let i = 0; i < value.length; i++) {
    const li = document.createElement('li');

    li.textContent = value[i];
    ul.append(li);
    createTree(li, data[value[i]]);
  }
}

createTree(tree, food);
