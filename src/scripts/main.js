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

function createTree(node, data) {
  // Recursion
  if (Object.keys(data).length === 0) {
    // If data is an empty object, end recursion
    return 0;
  } else {
    const currentNestingLevelData = Object.entries(data);
    const ul = document.createElement('ul');

    currentNestingLevelData.forEach((schema) => {
      const li = document.createElement('li');

      if (typeof schema[0] === 'string') {
        li.textContent = schema[0];
      }

      ul.append(li);

      createTree(li, schema[1]);
    });

    node.appendChild(ul);
  }
}

createTree(tree, food);
