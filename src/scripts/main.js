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

function createLi(text) {
  const li = document.createElement('li');

  li.innerHTML = text;

  return li;
}

function createTree(element, data) {
  const externalList = Object.keys(data);
  const ul = document.createElement('ul');

  for (let i = 0; i < externalList.length; i++) {
    const key = externalList[i];
    const internalList = Object.keys(data[key]);
    const li = createLi(key);

    ul.append(li);

    if (internalList.length > 0) {
      createTree(li, data[key]);
    }
  }

  element.append(ul);
}

createTree(tree, food);
