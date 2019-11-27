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

function createTreeDOM(element, data) {
  element.append(createTree(data));
}

function createTree(data) {
  if (!Object.keys(data).length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const branch = createTree(data[key]);

    if (branch) {
      li.append(branch);
    }
    ul.append(li);
  }

  return ul;
}

createTreeDOM(tree, food);
