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
  tree.append(createTreeDom(data));
}

function createTreeDom(data) {
  if (!Object.keys(data).length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const childrenUl = createTreeDom(data[key]);

    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

createTree(tree, food);
