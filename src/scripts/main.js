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
  const createList = (object) => {
    const fragment = document.createDocumentFragment();
    const list = document.createElement('ul');

    for (const product in object) {
      const item = document.createElement('li');

      item.textContent = product;

      if (Object.keys(object[product]).length) {
        const childList = createList(object[product]);

        item.appendChild(childList);
      }

      list.appendChild(item);
    }

    fragment.appendChild(list);

    return fragment;
  };

  const treeFragment = createList(data);

  element.appendChild(treeFragment);
}

createTree(tree, food);
