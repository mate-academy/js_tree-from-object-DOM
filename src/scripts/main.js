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

  element.append(ul);

  for (const prop in data) {
    const li = document.createElement('li');

    ul.append(li);

    li.innerHTML = prop;

    if (Object.keys(data).length) {
      createTree(li, data[prop]);
    }
  }
}

createTree(tree, food);
