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

  for (const property in data) {
    const li = document.createElement('li');

    li.textContent = property;
    ul.append(li);

    if (Object.keys(data[property]).length) {
      createTree(ul, data[property]);
    }
  }

  if (element.lastElementChild) {
    element.lastElementChild.append(ul);
  } else {
    element.append(ul);
  }
}

createTree(tree, food);
