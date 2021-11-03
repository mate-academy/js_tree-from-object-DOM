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

function createTreeDom(obj) {
  if (Object.keys(obj) === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');

    li.textContent = key;

    const childUl = createTreeDom(obj[key]);

    if (childUl) {
      li.append(childUl);
    }

    ul.append(li);
  }

  if ([...ul.children].length !== 0) {
    return ul;
  }
}

function createTree(element, data) {
  element.append(createTreeDom(data));
}

createTree(tree, food);
