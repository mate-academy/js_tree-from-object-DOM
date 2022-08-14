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
  element.append(createTreeElement(data));
}

function createTreeElement(obj) {
  if (!Object.keys.length) {
    return undefined;
  }

  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const childrenLi = createTreeElement(obj[key]);

    if (childrenLi) {
      li.append(childrenLi);
    };

    ul.append(li);
  }

  return ul;
}

createTree(tree, food);
