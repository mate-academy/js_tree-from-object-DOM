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
  element.append(createContent(data));
}

function createContent(obj) {
  if (Object.keys(obj).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');

    li.innerText = key;

    const childrenUl = createContent(obj[key]);

    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

createTree(tree, food);
