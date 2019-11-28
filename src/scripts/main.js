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

  function createTreeText(obj) {
    let li = '';
    let ul;

    for (const i in obj) {
      li += '<li>' + i + createTreeText(obj[i]) + '</li>';
    };

    if (li) {
      ul = '<ul>' + li + '</ul>';
    }

    return ul || '';
  };
}

createTree(tree, food);
