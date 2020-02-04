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
  function returnElement(obj) {
    let str = '';

    for (const key in obj) {
      if (Object.keys(obj[key]).length === 0) {
        str += `<li>${key}</li>`;
      } else {
        str += `<li>${key}<ul>${returnElement(obj[key])}</ul></li>`;
      }
    }

    return str;
  }

  element.innerHTML = `<ul>${returnElement(data)}</ul>`;
}

createTree(tree, food);
