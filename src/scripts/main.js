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
  const dataKeys = Object.keys(data);

  for (const key of dataKeys) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');

    li.innerHTML = key;

    if (Object.entries(data[key]).length !== 0) {
      li.insertAdjacentElement('beforeend', ul);
    }

    element.append(li);
  }

  for (let i = 0; i < dataKeys.length; i++) {
    const dataObj = data[dataKeys[i]];

    if (Object.entries(dataObj).length !== 0) {
      createTree(element.childNodes[i].lastChild, dataObj);
    }
  }
}

createTree(tree, food);
