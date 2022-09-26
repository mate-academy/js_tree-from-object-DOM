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
  element.append(data);
}

const parseObject = data => {
  if (Object.keys(data).length === 0) {
    return;
  }

  const rootList = document.createElement('ul');

  for (const obj in data) {
    const item = document.createElement('li');

    item.textContent = obj;

    const childLi = parseObject(data[obj]);

    if (childLi) {
      item.append(childLi);
    }

    rootList.append(item);
  }

  return rootList;
};

const rootUl = parseObject(food);

createTree(tree, rootUl);
