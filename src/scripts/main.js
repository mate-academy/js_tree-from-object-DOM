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
  function createLeyout(obj) {
    let markup = '';

    for (const key in obj) {
      if (Object.keys(obj[key]).length === 0) {
        markup += `<li>${key}</li>`;
      } else {
        markup += `<li>${key}<ul>${createLeyout(obj[key])}</ul></li>`;
      }
    }

    return markup;
  }

  element.innerHTML = `<ul>${createLeyout(data)}</ul>`;
}

createTree(tree, food);
