'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(treeContainer, foodObject) {
  if (JSON.stringify(foodObject) === '{}') {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in foodObject) {
    const li = document.createElement('li');

    li.innerText = key;
    ul.append(li);

    createTree(li, foodObject[key]);
  }

  treeContainer.append(ul);
}

createTree(tree, food);
