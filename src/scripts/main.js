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

  for (const elem in data) {
    const li = document.createElement('li');

    li.textContent = elem;
    ul.append(li);

    if (Object.keys(data[elem]).length !== 0
      && data[elem].constructor === Object) {
      createTree(li, data[elem]);
    }
  }
}

createTree(tree, food);
