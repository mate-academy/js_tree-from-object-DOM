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

  for (const [text, ref] of Object.entries(data)) {
    const li = document.createElement('li');

    li.append(text);
    createTree(li, ref);
    ul.append(li);
  }

  if (Object.entries(data).length > 0) {
    element.append(ul);
  }
}

createTree(tree, food);
