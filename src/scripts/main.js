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
  let targetList = element;

  if (!targetList) {
    targetList = document.createElement('ul');
    targetList.setAttribute('id', 'tree');

    document.body.append(targetList);
  }

  for (const [key, value] of Object.entries(data)) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (Object.values(value).length > 0) {
      const nestedList = document.createElement('ul');

      listItem.append(nestedList);

      createTree(nestedList, value);
    }

    targetList.append(listItem);
  }
}

createTree(tree, food);
