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
  element.append(createTreeDom(data));
}

function createTreeDom(data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    const childrenUl = createTreeDom(data[key]);

    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);

    if (!Object.keys(data).length) {
      return;
    };
  }

  return ul;
}

createTree(tree, food);
