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
  if (!data) {
    return;
  }

  let treeBranch = element;

  if (!element) {
    treeBranch = document.createElement('div');
    treeBranch.id = 'tree';
    document.body.prepend(treeBranch);
  }

  const ul = document.createElement('ul');

  for (const dataElem in data) {
    const li = document.createElement('li');

    li.append(dataElem);

    createTree(li, data[dataElem]);
    ul.append(li);
  }

  if (ul.innerHTML) {
    treeBranch.append(ul);
  }
}

createTree(tree, food);
