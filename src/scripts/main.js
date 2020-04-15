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
  element.innerHTML = createTreeText(data);
}

function createTreeText(objTree) {
  let li = '';
  let ul;

  for (const key in objTree) {
    li += '<li>' + key + createTreeText(objTree[key]) + '</li>';
  }

  if (li) {
    ul = '<ul>' + li + '</ul>';

    return ul;
  } else {
    return '';
  }
}
createTree(tree, food);
