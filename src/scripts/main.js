/* eslint-disable no-console */
'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  if (Object.keys(data).length === 0) {
    // eslint-disable-next-line no-useless-return
    return;
  }

  const ul = document.createElement('ul');

  element.append(ul);
  console.log(data);

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.append(li);

    if (typeof (data[key]) === 'object') {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
