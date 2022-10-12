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

function createTree(element, data) {
 element.innerHTML = createTreeText(data);
}

function createTreeText(data) { 
  let li = '';
  let ul;
  for (let key in data) {
    li += '<li>' + key + createTreeText(data[key]) + '</li>';
  }
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }
  return ul || '';
}

createTree(tree, food);
