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
  const keys = Object.keys(data);
  const category = document.createElement('ul');

  if (keys.length) {
    element.append(category);

    keys.forEach((key) => {
      const cos = document.createElement('li');

      cos.textContent = key;
      category.append(cos);
      createTree(cos, data[key]);
    });
  }
}

createTree(tree, food);
