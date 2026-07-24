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
  if (Object.keys(data).length === 0) {
    return;
  }

  const treeBranch = element || document.createElement('div');

  if (!element) {
    treeBranch.id = 'tree';
    document.body.prepend(treeBranch);
  }

  const ul = document.createElement('ul');

  for (const [category, childrenObj] of Object.entries(data)) {
    const li = document.createElement('li');

    li.append(category);

    createTree(li, childrenObj);
    ul.append(li);
  }

  if (ul.children.length > 0) {
    treeBranch.append(ul);
  }
}

createTree(tree, food);
