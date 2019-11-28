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
  const treeFromObject = function(obj) {
    let li = '';
    let ul;

    for (const item in obj) {
      li += `<li>${item + treeFromObject(obj[item])}</li>`;
    }

    if (li) {
      ul = `<ul>${li}</ul>`;
    }

    return ul || '';
  };

  element.innerHTML = treeFromObject(data);
}

createTree(tree, food);
