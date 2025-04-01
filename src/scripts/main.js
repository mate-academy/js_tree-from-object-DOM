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

  'Meal': {
    'Meat': {
      'Pork': {},
      'Chicken': {},
    },
    'Vegetables': {
      'Potato': {
        'Fried': {},
        'Baked': {},
      },
      'Cabbage': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  element.append(list);

  for (const [itemKey, itemValue] of Object.entries(data)) {
    const item = document.createElement('li');

    item.innerText = itemKey;
    list.append(item);

    if (Object.keys(itemValue).length) {
      createTree(item, itemValue);
    }
  }
}

createTree(tree, food);
