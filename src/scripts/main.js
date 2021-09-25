'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
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
  element.append(create(data));
}

function create(data) {
  const ul = document.createElement('ul');

  if (Object.keys(data).length === undefined) {
    return;
  }

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const child = create(data[key]);

    if (child) {
      li.append(child);
    }

    ul.append(li);
  }

  return ul;
}

createTree(tree, food);
