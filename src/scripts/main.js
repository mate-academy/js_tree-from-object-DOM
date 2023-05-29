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
  const rootList = document.createElement('ul');

  element.appendChild(rootList);

  function createNestedList(parentElement, nestedData) {
    Object.keys(nestedData).forEach(key => {
      const listItem = document.createElement('li');

      listItem.textContent = key;

      if (Object.keys(nestedData[key]).length > 0) {
        const nestedList = document.createElement('ul');

        createNestedList(nestedList, nestedData[key]);

        listItem.appendChild(nestedList);
      }

      parentElement.appendChild(listItem);
    });
  }

  createNestedList(rootList, data);
}

createTree(tree, food);
