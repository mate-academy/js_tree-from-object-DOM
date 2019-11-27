'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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

function createTree(element, data) {
  element.append(treeGenerator(data));
}

const treeGenerator = (elem) => {
  if (!Object.keys(elem).length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in elem) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const childrenUl = treeGenerator(elem[key]);

    if (childrenUl) {
      li.append(childrenUl);
    }
    ul.append(li);
  }

  return ul;
};

createTree(tree, food);
