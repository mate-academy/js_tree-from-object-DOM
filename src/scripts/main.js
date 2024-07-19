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

  element.appendChild(ul);

  for (const dataItem of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = dataItem[0];
    createTree(li, Object.values(dataItem)[1]);
    ul.appendChild(li);
  }

  if (!ul.hasChildNodes()) {
    ul.parentNode.removeChild(ul);
  }
}

createTree(tree, food);
