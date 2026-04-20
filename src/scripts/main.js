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

const newElement = document.createElement('div');

newElement.setAttribute('id', 'tree');
document.body.append(newElement);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  element.append(createTreeDom(data));
}

function createTreeDom(data) {
  if (!Object.keys(data).length) {
    return null;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    const childrenUl = createTreeDom(data[key]);

    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

createTree(tree, food);
