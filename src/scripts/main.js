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

  'Test Without Elements': {},
};

const tree = document.querySelector('#tree');

function createTree(container, data) {
  const element = document.createElement('ul');

  container.append(element);

  for (const key in data) {
    const li = document.createElement('li');

    li.innerText = key;
    element.append(li);

    if (Object.keys(data[key]).length) { // if element has subElements
      const liOfChildren = document.createElement('li');

      liOfChildren.style.listStyleType = 'none';
      element.append(liOfChildren);

      const ul = document.createElement('ul');

      liOfChildren.append(ul);
      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);
