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
  const ul = document.createElement('ul');

  if (!element) {
    ul.id = 'tree';
    document.body.prepend(ul);
  } else {
    element.append(ul);
  }

  Object.entries(data).forEach(([key, value]) => {
    const li = document.createElement('li');

    li.textContent = key;
    ul.append(li);

    if (Object.keys(value).length > 0) {
      createTree(li, value);
    }
  });
}

createTree(tree, food);
