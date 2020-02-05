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
  function createElement(object) {
    let li = '';

    for (const key in object) {
      !Object.keys(object[key])
        ? li += `<li>${key}</li>`
        : li += `<li>${key}<ul>${createElement(object[key])}</ul></li>`;
    }

    return li;
  }

  element.innerHTML = `<ul>${createElement(data)}</ul>`;
}

createTree(tree, food);
