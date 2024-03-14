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

function createTree(element, dataFood) {
  const createEl = (data) => {
    const ul = document.createElement('ul');

    for (const dataKey in data) {
      const li = document.createElement('li');

      li.innerText = dataKey;

      if (Object.keys(data[dataKey]).length === 0) {
        ul.append(li);
      } else {
        li.append(createEl(data[dataKey]));
        ul.append(li);
      }
    }

    return ul;
  };

  element.append(createEl(dataFood));
}

createTree(tree, food);
