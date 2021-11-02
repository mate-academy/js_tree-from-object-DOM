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
  // WRITE YOUR CODE HERE
  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const prop in data) {
    const li = document.createElement('li');

    li.innerHTML = prop;
    ul.append(li);

    createTree(li, data[prop]);
  }

  element.append(ul);
}
createTree(tree, food);
