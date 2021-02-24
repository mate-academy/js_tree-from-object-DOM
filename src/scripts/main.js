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
  const ul = document.createElement('ul');

  for (const product in data) {
    const li = document.createElement('li');

    li.innerText = product;
    ul.append(li);

    if (Object.keys(data[product]).length) {
      createTree(li, data[product]);
    }
  }

  return element.append(ul);
}

createTree(tree, food);
