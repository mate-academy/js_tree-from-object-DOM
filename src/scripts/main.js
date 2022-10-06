'use strict';

const food = {
  'Drink': {
    'Wine': 3,
    'Schnaps': 5,
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

const newTag = (tag) => document.createElement(`${tag}`);

function createTree(element, data) {
  const list = newTag('ul');

  Object.keys(data).map((key) => {
    const listItem = newTag('li');

    listItem.innerText = key;

    if (typeof data[key] === 'object') {
      createTree(listItem, data[key]);
    }

    list.append(listItem);
  });

  element.append(list);
};

const tree = document.querySelector('#tree');

createTree(tree, food);
