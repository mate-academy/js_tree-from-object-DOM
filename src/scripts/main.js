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

  for (const category in data) {
    const li = createLi(category, ul);

    if (
      typeof data[category] === 'object' &&
      Object.keys(data[category]).length > 0
    ) {
      createTree(li, data[category]);
    }
  }
}

function createLi(text, parentElement) {
  const li = document.createElement('li');

  li.textContent = text;

  parentElement.appendChild(li);

  return li;
}

createTree(tree, food);
