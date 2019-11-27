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

  for (const content in elem) {
    const li = document.createElement('li');

    li.innerHTML = content;

    const childrenUl = treeGenerator(elem[content]);

    if (childrenUl) {
      li.append(childrenUl);
    }
    ul.append(li);
  }

  return ul;
};

createTree(tree, food);
