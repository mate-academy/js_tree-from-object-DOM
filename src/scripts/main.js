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
  const list = document.createElement('ul');

  element.append(list);

  for (const product in data) {
    if (Object.keys(data[product]).length) {
      const itemWithList = document.createElement('li');

      itemWithList.textContent = product;
      list.append(itemWithList);
      createTree(itemWithList, data[product]);
      continue;
    }

    const item = document.createElement('li');

    item.textContent = product;
    list.append(item);
  }

  return list;
}

createTree(tree, food);
