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
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.innerText = key;
    ul.append(li);

    element.append(ul);

    if (Object.values(data).length > 0) {
      createTree(li, data[key]);
    } else {
      return;
    }
  }
}

createTree(tree, food);
