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
  let numb = 0;
  let list;
  let object;

  for (const key in data) {
    if (numb === 0) {
      list = document.createElement('ul');

      element.append(list);
      numb++;
    }

    const item = document.createElement('li');

    list.append(item);
    item.innerText = key;
    object = data[key];

    createTree(item, object);
  }
}

createTree(tree, food);
