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

const div = document.createElement('div');

div.id = 'tree';
document.body.appendChild(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  element.appendChild(ul);

  const dataLength = Object.entries(data);

  for (let i = 0; i < dataLength.length; i++) {
    const li = document.createElement('li');

    li.textContent = dataLength[i][0];
    ul.appendChild(li);

    if (Object.keys(dataLength[i][1]).length === 0) {
      continue;
    } else {
      createTree(li, dataLength[i][1]);
    }
  }
}

createTree(tree, food);
