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

  for (const key in data) {
    const li = document.createElement('li');

    li.innerText = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      const nestedLi = createTree(li, data[key]);

      li.append(nestedLi);
    }

    ul.append(li);
  }
  element.append(ul);

  return ul;
}

createTree(tree, food);
