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
  const children = Object.keys(data);

  if (children.length > 0) {
    for (const child of children) {
      const ul = document.createElement('ul');

      element.append(ul);

      const li = document.createElement('li');

      li.innerText = child;
      ul.append(li);

      createTree(li, data[child]);
    }
  }
}

createTree(tree, food);
