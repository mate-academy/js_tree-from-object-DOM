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
  if (Object.keys(data).length === 0) {
    return;
  }

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.append(key);

    if (Object.keys(value).length !== 0) {
      const ul = document.createElement('ul');

      li.append(ul);

      createTree(ul, value);
    }

    element.append(li);
  }
}

createTree(tree, food);
