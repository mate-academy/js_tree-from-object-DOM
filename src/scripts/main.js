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

// const tree = document.querySelector('#tree');

const tree = createDomElement();

createTree(tree, food);

function createDomElement() {
  const body = document.querySelector('body');
  const domTree = document.createElement('ul');

  domTree.id = 'tree';
  body.append(domTree);

  return domTree;
}

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');

      li.innerText = key;
      element.append(li);

      const ul = document.createElement('ul');

      li.append(ul);
      createTree(ul, data[key]);
    }
  }
}
