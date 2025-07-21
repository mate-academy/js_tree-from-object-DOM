'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const iterator = (foods) => {
    const keys = Object.keys(foods);

    if (keys.length === 0) {
      return '';
    }

    return keys
      .map((key) => {
        if (Object.keys(foods[key]).length > 0) {
          return `<li>${key}<ul>${iterator(foods[key])}</ul></li>`;
        }

        return `<li>${key}</li>`;
      })
      .join('');
  };

  element.innerHTML = `<ul>${iterator(data)}</ul>`;
}

createTree(tree, food);
