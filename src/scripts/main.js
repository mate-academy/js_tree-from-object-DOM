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
      'Banana': {
        'Fresh': {},
        'Old': {},
      },
      'Pineapple': {},
    },

  },

  'Test Without Elements': {},
  'test with non object': '',
};

const tree = document.querySelector('#tree');

function createTree(container, data) {
  const ul = document.createElement('ul');

  container.append(ul);

  for (const key in data) {
    const point = document.createElement('li');

    point.textContent = key;

    ul.append(point);

    if (Object.keys(data[key]).length) {
      createTree(point, data[key]);
    }
  }
}

createTree(tree, food);
