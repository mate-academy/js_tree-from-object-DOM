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

function htmlGenerator(data) {
  let html = '<ul>';

  for (const key in data) {
    html += `<li>${key}</li>`;

    if (Object.keys(data[key]).length > 0) {
      html += htmlGenerator(data[key]);
    }
  }

  return html + '</ul>';
}

function createTree(element, data) {
  element.innerHTML = htmlGenerator(data);
}

createTree(tree, food);
