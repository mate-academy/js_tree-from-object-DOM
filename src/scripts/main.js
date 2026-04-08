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

const treeDiv = document.createElement('div');

treeDiv.setAttribute('id', 'tree');
document.body.append(treeDiv);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  element.appendChild(ul);

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    ul.appendChild(li);

    if (
      data[key] !== null &&
      typeof data[key] === 'object' &&
      Object.values(data[key]).length > 0
    ) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
