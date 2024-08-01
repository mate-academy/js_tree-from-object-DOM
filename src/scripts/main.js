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
  for (const el in data) {
    const li = document.createElement('li');
    li.textContent = el;
    element.append(li);

    if(Object.keys(data[el]).length > 0) {
      const ul = document.createElement('ul');
      element.append(ul);
      createTree(ul, data[el]);
    }
  }
}

createTree(tree, food);
