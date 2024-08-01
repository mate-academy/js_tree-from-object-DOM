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
  // WRITE YOUR CODE HERE
  if (!Object.keys(data).length) {
    return;
  }

  const ul = document.createElement('ul');

  ul.id = element.id;

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const childrenUl = createTree(element, data[key]);

    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
    element.remove();

    document.body.append(ul);
  }

  return ul;
}

createTree(tree, food);
