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

const notEmtpy = (obj) => {
  return obj && typeof obj === 'object' && Object.keys(obj).length > 0;
};

function createTree(element, data) {
  if (notEmtpy(data)) {
    const ul = document.createElement('ul');

    for (const listKey in data) {
      const li = document.createElement('li');

      li.textContent = listKey;
      ul.append(li);

      if (notEmtpy(data[listKey])) {
        createTree(li, data[listKey]);
      }
    }

    element.append(ul);
  }
}

createTree(tree, food);
