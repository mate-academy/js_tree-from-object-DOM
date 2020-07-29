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
  // WRITE YOUR CODE HERE
  for (const info in data) {
    if (Object.entries(data[info]).length === 0) {
      element.insertAdjacentHTML('beforeend',
        `<ul>
          <li>${info}</li>
        </ul>`);
    } else {
      const ul = document.createElement('ul');

      ul.insertAdjacentHTML('beforeend',
        `<li>${info}</li>`);

      element.append(ul);
      createTree(ul, data[info]);
    }
  }
}

createTree(tree, food);
