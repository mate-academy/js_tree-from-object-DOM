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

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      const children = createTree(null, data[key]);

      li.appendChild(children);
    }

    ul.appendChild(li);
  }

  if (element) {
    element.appendChild(ul);

    return;
  }

  return ul;
}

const tree = document.createElement('ul');

tree.id = 'tree';
document.body.appendChild(tree);
createTree(tree, food);
